import React, { useCallback, useState } from "react";

import { AppHeader, Connections, CreationInfo, UploadAppModal } from "../";

import "./styles.scss";

interface Props {
  children: React.ReactNode;
  headerRight?: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ headerRight, children }) => {
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
