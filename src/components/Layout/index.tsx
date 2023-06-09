import React, { useCallback, useState } from "react";

import {
  AppHeader,
  Connections,
  CreationInfo,
  UploadAppModal,
  PrimaryButton,
} from "../";
import { useInstances } from "../../hooks";

import "./styles.scss";

interface Props {
  children: React.ReactNode;
  headerRight?: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ headerRight, children }) => {
  const { socket } = useInstances();
  const [isVisible, setVisible] = useState(false);

  // @ts-ignore
  window.setVisible = useCallback((_visiblie: boolean) => {
    setVisible(_visiblie);
  }, []);

  return (
    <div className="app-layout">
      {isVisible && <UploadAppModal />}
      <AppHeader headerRight={headerRight} />
      <div className="page-content">
        <div className="data-wrap">
          <div className="main-box">
            <div className="info-side">
              <Connections />
              <CreationInfo title="Create clients" dataKey={"clientsInfo"} />
              <PrimaryButton
                label="Force stop"
                onClick={() => socket?.emit("forceStop")}
              />
              {/* <CreationInfo title="Create channels" dataKey={"channelsInfo"} />
              <CreationInfo title="Send messages" dataKey={"messagesInfo"} /> */}
            </div>
            <div className="container-lg">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
