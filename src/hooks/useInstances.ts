import { useContext } from "react";

import { InstanceContext } from "../context";

export const useInstances = () => useContext(InstanceContext);
