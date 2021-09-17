import { ListItem } from '@mui/material'
import React from 'react'

interface propType {
    nickname: string
}

export default function Player(props: propType): JSX.Element {
    return (
        <ListItem>{props.nickname}</ListItem>
    )
}
