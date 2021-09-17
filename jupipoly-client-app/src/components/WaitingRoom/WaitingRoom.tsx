import { List, Grid } from '@mui/material'
import React from 'react'
import Player from './Player';

export default function WaitingRoom() {

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
