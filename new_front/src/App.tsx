import React, {useState} from 'react';
import {postToURLSingle} from "./api/postToUrl";
import {PathRequest} from "./components/PathRequest";
import {CssBaseline} from "@material-ui/core";
import { useStyles } from './styles/mainStyles';
import Content from "./components/Content";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
    const [input, setInput] = useState<any>();

    const sendData = {
        "params": [
            {
                "text": input,
                "ratio": 0.5,
                "word_count": 30
            }
        ]
    }

    const handleSendData = async () => {
        const response = await postToURLSingle.postData(PathRequest.process_text, sendData)
        console.log(response)
    }



        const classes = useStyles();
        const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            setOpen(true);
        };
        const handleDrawerClose = () => {
            setOpen(false);
        };


    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header open={open} handleDrawerOpen={handleDrawerOpen}/>
            <Menu open={open} handleDrawerClose={handleDrawerClose}/>
            <Content/>
        </div>
        // <Container maxWidth="sm">
        //     <TextareaAutosize
        //         onChange={(e) => setInput(e.target.value)}
        //         rowsMax={10}
        //         rowsMin={2}
        //         aria-label="empty textarea" placeholder="Вставьте текст для обработки " />
        //     <Button
        //         variant="contained"
        //         color="primary"
        //         onClick={handleSendData}
        //     >
        //         Обработать текст
        //     </Button>
        // </Container>
  );
}

export default App;
