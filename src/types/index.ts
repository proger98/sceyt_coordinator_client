export interface IClientCreate {
    count: number,
    userPrefix: string,
    intervalTime: number,
    intervalCount: number,
    disconnectClient: number
}

export interface IInfo {
    [socketId: string]: {
        fail: number
        success: number
        disconnected:number,
        time: number
        state?: string
        clients?: any
    }
}