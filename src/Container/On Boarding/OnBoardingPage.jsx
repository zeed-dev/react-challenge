import { Box, Button, Container, Link, makeStyles, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import Image from '../../images/img_onboarding.jpg'

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
    title: {
        fontWeight: "700"
    },
    subtitle: {
        fontWeight: "500",
        color: "#877F7F",
    },
    buttonColor: {
        primary: "green",
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


const OnBoardingPage = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <img src={Image} alt="" className={classes.media} />
                <Typography
                    className={classes.title}
                    variant="subtitle1"
                    component="h2">
                    Selamat Datang!
                </Typography>
                <Box marginTop="16px" />
                <Typography
                    className={classes.subtitle}
                    variant="subtitle2"
                    component="h2"
                    align="center"
                    color={classes.subtitle.color}>
                    Aplikasi ini digunakan untuk membeli makanan dan minuman secara online dengan pembayaran menggunakan uang elektronik di Patra Park Food Culinary
                </Typography>
                <Box marginTop="60px" />
                <ColorButton variant="contained" color="primary" href="/register">
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
        </Container >
    );
}

export default OnBoardingPage;