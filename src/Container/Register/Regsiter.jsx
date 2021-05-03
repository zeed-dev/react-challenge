import { Box, Button, Container, Link, makeStyles, TextField, Typography, withStyles } from '@material-ui/core';
import Image from '../../images/img_register.jpg'
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
    subtitle: {
        fontWeight: "500",
        color: "#877F7F",
    },
    root: {
        minWidth: "248px"
    }
}))

const ColorButton = withStyles(() => ({
    root: {
        backgroundColor: "#149911",
        '&:hover': {
            backgroundColor: "#149911",
        },
    },
}))(Button);



const Register = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <img src={Image} alt="" className={classes.media} />
                <Box marginTop="78px" />
                <TextField
                    id="outlined-basic"
                    label="Nama"
                    variant="outlined"
                    style={{ minWidth: 248 }} />
                <Box marginTop="32px" />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ minWidth: 248 }} />
                <Box marginTop="32px" />
                <TextField
                    id="outlined-basic"
                    label="No Tlp."
                    variant="outlined"
                    style={{ minWidth: 248 }} />
                <Box marginTop="32px" />
                <TextField
                    id="outlined-basic"
                    label="Kata Sandi"
                    variant="outlined"
                    style={{ width: 248 }} />
                <Box marginTop="32px" />
                <TextField
                    id="outlined-basic"
                    label="Konfirmasi Kata Sandi"
                    variant="outlined"
                    style={{ minWidth: 248 }} />
                <Box marginTop="41px" />
                <ColorButton variant="contained" color="primary">
                    Daftar
                </ColorButton>
                <Box marginTop="26px" />

                <Typography
                    className={classes.subtitle}
                    variant="subtitle2"
                    component="h2"
                    align="center"
                    color={classes.subtitle.color}>
                    Sudah punya akun?
                    <Link href="/login" style={{ color: "#149911", textDecoration: 'none' }} onClick={console.log("im buton")} > Masuk
                    </Link>
                </Typography>
                <Box marginTop="32px" />
            </div>
        </Container>
    );
}

export default Register;
