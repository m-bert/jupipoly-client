import { List, Grid } from '@mui/material'
import React from 'react'
import { Socket } from 'socket.io-client';
import Player from './Player';

interface propsType {
    io: Socket,
    displayStatus: boolean,
    handleComponentDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

export default function WaitingRoom(props: propsType) {

    const nicknames: Array<string> = ["twoja stara", "zdzdzxdzxdxdzxdxdxd", "jupik"];
    let playersList: Array<JSX.Element> = []

    for (let i in nicknames)
        playersList.push(<Player nickname={nicknames[i]} key={i} />)

    return (
        <List>
            {playersList}
        </List>
    )
}
