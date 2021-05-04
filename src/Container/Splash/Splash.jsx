import { Box, Container, Link, makeStyles } from '@material-ui/core';
import React from 'react'
import Image from '../../images/ic_spalsh.jpg'
import ImageBg from '../../images/spalsh.jpg'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${ImageBg})`,
    },
    media: {
        height: '165px',
        marginBottom: '33px'
    },
}))

const Splash = () => {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Box marginTop="150px" />
                <img src={Image} alt="" className={classes.media} />
                <Link
                    href="/onboarding"
                    style={{
                        color: "#0065B3",
                        textDecoration: 'none',
                        fontWeight: 700
                    }}
                    onClick={console.log("im buton")} >
                    Patra Park Food Culinary
                </Link>
            </div>
        </Container >
    );
}

export default Splash;