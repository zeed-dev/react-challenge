import { Box, Button, Container, Link, makeStyles, TextField, withStyles } from '@material-ui/core';
import Image from '../../images/img_login.jpg'
import React from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    media: {
        height: '165px',
        marginBottom: '33px'
    },
}))

const ColorButton = withStyles(() => ({
    root: {
        backgroundColor: "#149911",
        '&:hover': {
            backgroundColor: "#149911",
        },
    },
}))(Button);



const Login = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <img src={Image} alt="" className={classes.media} />
                <Box marginTop="78px" />
                <TextField id="outlined-basic" label="Nomor Tlp." variant="outlined" />
                <Box marginTop="32px" />
                <TextField id="outlined-basic" label="Kata Sandi." variant="outlined" />
                <Box marginTop="32px" />
                <ColorButton variant="contained" color="primary">
                    Masuk
                </ColorButton>
                <Box marginTop="26px" />

                <Link href="#" style={{ color: "#149911", textDecoration: 'none', }} onClick={console.log("im buton")}> Masuk sebagai staff</Link>

            </div>
            <Box marginTop="32px" />
        </Container>
    );
}

export default Login;
