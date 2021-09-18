import React, { useState } from "react";
import { TextField, Button, Box, Card, Grid, Paper, Container } from "@mui/material";
import { Socket } from "socket.io-client";

interface propsType {
    io: Socket,
    displayStatus: boolean,
    handleComponentDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

export default function LoginForm(props: propsType) {

    const [nickname, changeNickname] = useState("");

    function handleNickname(e: React.ChangeEvent<HTMLInputElement>) {
        changeNickname(e.target.value);
    }

    function enterGame() {
        if (nickname != "") {
            props.io.emit("add-player", nickname);

            // if player with choosen nick already exists //
            props.io.on("add-player-status", (added: boolean): void => {
                if (added)
                    props.handleComponentDisplay(false);
            })
        }
    }

    return (
        <>{props.displayStatus &&
            <Container maxWidth='md'>
                <Paper elevation={5} sx={{ padding: '20px' }}>
                    <Grid container direction='column' spacing={4} alignItems='center'>

                        <Grid item>
                            <TextField label="Nickname" variant="outlined" color='secondary' fullWidth onChange={handleNickname} />
                        </Grid>

                        <Grid item>
                            <Button variant="outlined" color="secondary" onClick={enterGame}>
                                Wejdź do gry
                            </Button>
                        </Grid>

                    </Grid>
                </Paper>
            </Container>
        }
        </>
    );
}
