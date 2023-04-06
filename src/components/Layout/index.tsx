import React from "react";

import { AppHeader, Connections, CreationInfo } from "../";

import "./styles.scss";

interface Props {
  children: React.ReactNode;
  headerRight?: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ headerRight, children }) => {
  return (
    <div className="app-layout">
      <AppHeader headerRight={headerRight} />
      <div className="page-content">
        <div className="data-wrap">
          <div className="main-box">
            <div className="info-side">
              <Connections />
              <CreationInfo title="Create clients" dataKey={"clientsInfo"} />
              <CreationInfo title="Create channels" dataKey={"channelsInfo"} />
              <CreationInfo title="Send messages" dataKey={"messagesInfo"} />
            </div>
            <div className="container">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
