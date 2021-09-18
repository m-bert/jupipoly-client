import { ListItem, Theme } from '@mui/material'
import React from 'react'

interface propsType {
    nickname: string
}

export default function Player(props: propsType): JSX.Element {
    return (
        <ListItem sx={{ color: 'white' }}>{props.nickname}</ListItem>
    )
}
