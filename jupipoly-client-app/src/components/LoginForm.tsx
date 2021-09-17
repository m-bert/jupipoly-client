import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function LoginForm(props: any) {

    const [nickname, changeNickname] = useState("");

    function handleNickname(e: any) {
        changeNickname(e.target.value);
    }

    function enterGame() {
        if (nickname != "")
            props.io.emit("add-player", nickname);
    }

    return (
        <ThemeProvider theme={props.theme}>
            <Box>
                <TextField label="Nickname" variant="standard" color="secondary" onChange={handleNickname} />
                <Button variant="contained" color="secondary" onClick={enterGame}>
                    Wejdź do gry
                </Button>
            </Box>
        </ThemeProvider>
    );
}
