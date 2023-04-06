import React from "react";

import { useInstances } from "../../hooks";
import "./styles.scss";

export const Connections: React.FC = () => {
  const { instances, clientsInfo } = useInstances();
  console.log(clientsInfo);
  return (
    <div className="info-box">
      <span className="text-sm font-medium text-gray-90">
        Active connections:
        <span className="ml-2 inline-flex px-2 items-center bg-green-100 text-white text-xs font-medium mr-2 py-0.5 rounded-full dark:bg-green-900 ">
          <span className="mr-2 flex w-3 h-3 bg-green-500 rounded-full"></span>
          {instances.length}
        </span>
      </span>
    </div>
  );
};
