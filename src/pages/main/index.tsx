import React, { useCallback } from "react";

import { useInstances } from "../../hooks";
import APICalls from "../../api/APICalls";
import Card from "../../components/card";
// {
//     userPrefix: "test-user-",
//     count: 1,
//     intervalCount: 10,
//     intervalTime: 1000,
//     disconnectClient: 0,
//   }

const sections = {
  createClients: [
    {
      name: "userPrefix",
      label: "User prefix",
    },
    {
      name: "count",
      label: "Clients count",
    },
    {
      name: "intervalCount",
      label: "Interval count",
    },
    {
      name: "intervalTime",
      label: "Interval time",
    },
    {
      name: "disconnectClient",
      label: "Disconnect clients",
    },
  ],
};

const MainPage: React.FC = () => {
  const { instances, info } = useInstances();

  const createClients = useCallback((data: any) => {
    return APICalls.createClients(data);
  }, []);

  return (
    <div className="w-full max-w-xs">
      <h3>{JSON.stringify(info, null, 4)}</h3>
      <li>All realtime connections {instances.length}</li>
      <Card
        onClick={createClients}
        label={"Create (demo)"}
        initialValues={{
          count: 1,
          intervalCount: 10,
          intervalTime: 1000,
          disconnectClient: 0,
          userPrefix: "test-user-",
        }}
        sections={sections.createClients}
      />
    </div>
  );
};

export default MainPage;
