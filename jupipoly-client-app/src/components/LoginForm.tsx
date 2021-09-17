import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function LoginForm(props: any) {

    const [nickname, changeNickname] = useState("");
    const [display, hide] = useState(true);

    function handleNickname(e: any) {
        changeNickname(e.target.value);
    }

    function enterGame() {
        if (nickname != "") {
            props.io.emit("add-player", nickname);
            props.io.on("player-exists", (message: string): void => {
                console.log(message)
            })
            props.io.on("player-added", (): void => {
                hide(false);
            })
        }
    }

    return (
        <>{display &&
            <ThemeProvider theme={props.theme}>
                <Box>
                    <TextField label="Nickname" variant="standard" color="secondary" onChange={handleNickname} />
                    <Button variant="contained" color="secondary" onClick={enterGame}>
                        Wejdź do gry
                    </Button>
                </Box>
            </ThemeProvider>
        }
        </>
    );
}
