import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

import { SERVER_ENDPOINT } from "../constants";
import { IInfo } from "../types";

interface IInstances {
  ids: string[];
  length: number;
}

interface IInstanceContext {
  socket: Socket | null;
  instances: IInstances;
  clientsInfo: any;
  channelsInfo: any;
  messagesInfo: any;
}

export const InstanceContext = createContext<IInstanceContext>({
  socket: null,
  instances: {
    ids: [],
    length: 0,
  },
  clientsInfo: {},
  channelsInfo: {},
  messagesInfo: {},
});

export const InstanceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const socket = useRef<Socket | null>(null);
  const [instances, setInstances] = useState<IInstances>({
    ids: [],
    length: 0,
  });
  const [clientsInfo, setInfo] = useState<IInfo>({});

  useEffect(() => {
    const _socket = io(SERVER_ENDPOINT);
    socket.current = _socket;
    _socket.on("connect", () => {
      console.log(_socket?.id);
    });
    _socket.on("allConnections", (_instances: IInstances) => {
      setInstances(_instances);
    });
    // TODO types
    _socket.on("clientsInfo", (_info) => {
      setInfo((prev) => ({ ...(prev || {}), [_info.socketId]: _info }));
    });
  }, []);

  const value = useMemo(
    () => ({
      instances,
      clientsInfo,
      channelsInfo: {},
      messagesInfo: {},
      socket: socket.current,
    }),
    [instances, clientsInfo]
  );

  return (
    <InstanceContext.Provider value={value}>
      {children}
    </InstanceContext.Provider>
  );
};
