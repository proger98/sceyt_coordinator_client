export interface IClientCreate {
  count: number;
  userPrefix: string;
  intervalTime: number;
  intervalCount: number;
  disconnectClient: number;
}

export interface IInfo {
  [socketId: string]: {
    fail: number;
    success: number;
    disconnected: number;
    time: number;
    state?: string;
    clients?: any;
  };
}

export interface IApp {
  name: string;
  appId: string;
}

export interface IUploadData {
  file: File;
  name: string;
  appId: string;
  endpoint: string;
}
