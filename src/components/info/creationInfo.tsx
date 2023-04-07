import React, { useMemo } from "react";

import { useInstances } from "../../hooks";

interface ICreationInfo {
  title: string;
  dataKey: "clientsInfo" | "channelsInfo" | "messagesInfo";
}

export const CreationInfo: React.FC<ICreationInfo> = ({ title, dataKey }) => {
  const data = useInstances();

  const info = useMemo(() => data[dataKey], [data, dataKey]);

  return (
    <div className="info-box">
      <span className="text-sm font-medium text-gray-90">{title}:</span>
      <ul>
        {Object.keys(info).map((child) => (
          <li key={child}>
            <span className="block text-sm font-medium text-gray-70">
              {child}
            </span>
            <span className="block text-sm font-medium text-green-500">
              Success: {info[child].success}
            </span>
            <span className="block text-sm font-medium text-red-500">
              Failed: {info[child].fail}
            </span>
            {info[child]?.disconnected !== undefined && (
              <span className="block text-sm font-medium text-blue-500">
                Disconnected: {info[child].disconnected}
              </span>
            )}
            {info[child].state !== undefined && (
              <span className="block text-sm font-medium text-blue-500">
                State: {info[child].state}
              </span>
            )}
            <span className="block text-sm font-medium text-blue-500">
              Time Spent: {info[child].time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
