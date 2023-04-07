import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  createContext,
} from "react";

import { IApp, IUploadData } from "../types";
import APICalls from "../api/APICalls";

interface IAppContext {
  apps: IApp[];
  selected: string;
  uploadApp: (data: IUploadData) => void;
  selectApp: (appId: string) => void;
}

export const AppContext = createContext<IAppContext>({
  apps: [],
  selected: "",
  uploadApp: () => undefined,
  selectApp: () => undefined,
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [apps, setApps] = useState<IApp[]>([]);
  const [selected, setSelected] = useState<string>("");

  const getApps = useCallback(() => {
    APICalls.getAppData().then((res) => {
      setApps(res.data.apps || []);
      setSelected(res.data.selected);
    });
  }, []);

  const uploadApp = useCallback((data: IUploadData) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      // @ts-ignore
      formData.append(key, data[key]);
    });
    APICalls.uploadApp(formData).then((res) => {
      setApps(res.data.apps);
      setSelected(res.data.selected);
    });
  }, []);

  const selectApp = useCallback((appId: string) => {
    APICalls.updateApp(appId).then((res) => {
      setApps(res.data.apps);
      setSelected(res.data.selected);
    });
  }, []);

  useEffect(() => {
    getApps();
  }, [getApps]);

  const value = useMemo(
    () => ({
      apps,
      selected,
      uploadApp,
      selectApp,
    }),
    [apps, selected, uploadApp, selectApp]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
