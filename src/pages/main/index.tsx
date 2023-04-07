import React, { useCallback } from "react";

import APICalls from "../../api/APICalls";
import { Card } from "../../components";

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

export const MainPage: React.FC = () => {
  const createClients = useCallback((data: any) => {
    return APICalls.createClients({
      ...data,
      disconnectClient: !!data.disconnectClient,
    });
  }, []);

  return (
    <div className="w-full max-w-xs">
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
