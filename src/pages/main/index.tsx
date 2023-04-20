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
    {
      name: "contactCount",
      label: "Contact count",
    },
    {
      name: "discoveryPrefix",
      label: "Discovery prefix",
    },
    {
      name: "deleteDiscoveriesAfterCreating",
      label: "Delete discoveries after creating",
    },
    {
      name: "markMessagesAsRead",
      label: "Mark messages as read",
    },
    {
      name: "markMessagesAsDelivered",
      label: "Mark messages as delivered",
    },
  ],
};

export const MainPage: React.FC = () => {
  const createClients = useCallback((data: any) => {
    return APICalls.createClients({
      ...data,
      contactCount: !!data.contactCount,
      disconnectClient: !!data.disconnectClient,
      markMessagesAsRead: !!data.markMessagesAsRead,
      markMessagesAsDelivered: !!data.markMessagesAsDelivered,
      deleteDiscoveriesAfterCreating: !!data.deleteDiscoveriesAfterCreating,
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
          contactCount: 0,
          discoveryPrefix: "",
          markMessagesAsRead: 0,
          userPrefix: "test-user-",
          markMessagesAsDelivered: 0,
          deleteDiscoveriesAfterCreating: 0,
        }}
        sections={sections.createClients}
      />
    </div>
  );
};
