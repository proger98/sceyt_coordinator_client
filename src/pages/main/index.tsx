import React, { useCallback } from 'react';
import APICalls from '../../api/APICalls';

import { useInstances } from '../../hooks';

const MainPage: React.FC = () => {
    const {instances, info} = useInstances()
    
    const createClients = useCallback(() => {
        APICalls.createClients({
            userPrefix: 'test-user-',
            count: 1,
            intervalCount: 10,
            intervalTime: 1000,
            disconnectClient: 0,
        }).then(console.log)
    }, [])

    return (
        <>
            <ul>
                <h3>{JSON.stringify(info, null, 4)}</h3>
                <li>All realtime connections  {instances.length}</li>
                {instances.ids.map(id => <li key={id}>Connected {id}</li>)}
                <button onClick={createClients/*  */}>Create clients (demo)</button>
            </ul>
        </>
    )
}

export default MainPage