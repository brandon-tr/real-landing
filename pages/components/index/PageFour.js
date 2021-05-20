import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Hidden,
    IconButton,
    makeStyles,
    Toolbar,
    Typography
} from "@material-ui/core";
import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Work Sans',
        fontSize: '1.3rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '29px',
        letterSpacing: '0em',
        textAlign: 'center',
        color: theme.palette.primary.main
    },
    subText: {
        fontSize: '18px',
        color: theme.palette.secondary.second,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '28.8px',
        letterSpacing: '0em',
    },
    background: {
        background: theme.palette.white.main,
        height: '100vh',
    },
    aboutUsColor: {
        color: theme.palette.primary.main
    },
    aboutUsDescription: {
        color: theme.palette.primary.light
    },
    aboutUsSubtext: {
        color: theme.palette.primary.dark
    },
    secondarySecond: {
        color: theme.palette.secondary.second
    },
}));

export default function pageFour() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <div style={{padding: '2rem 5rem 0 5rem'}}>
                        <Image src={"/logodark.png"} width={50} height={50} color="primary"/>
                    </div>
                    <div style={{flexGrow: 1}}/>
                    <Hidden only={['lg', 'xl']}>
                        <IconButton edge="start" color="primary" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                    <Hidden mdDown>
                        <Box display="flex">
                            <Link href="/">
                                <a className={classes.root} style={{padding: '2rem 5rem 0 1rem'}}>Home</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '2rem 5rem 0 1rem'}}>Services</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '2rem 5rem 0 1rem'}}>How it Works</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '2rem 5rem 0 1rem'}}>Gallery</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '2rem 5rem 0 1rem'}}>Contact Us</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '2rem 5rem 0 1rem'}}> <Image src={"/darkdashboard.png"}
                                                                                                          width={25} height={25}/>
                                </a>
                            </Link>
                        </Box>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <section>
                <Container style={{ height: '98vh' }}>
                    <Hidden only={['xs', 'sm', 'md', 'lg']}>
                        <Box display="flex" justifyContent="center" alignItems="center" style={{ height: '85vh' }}>
                            <iframe width='1053' height='680' src='https://my.matterport.com/show/?m=CikajWaJLMM'
                                    frameBorder='0' allowFullScreen allow='xr-spatial-tracking'></iframe>
                        </Box>
                    </Hidden>
                    <Hidden only={['xl']}>
                        <Box display="flex" justifyContent="center" alignItems="center" style={{ paddingTop: '8vh' }}>
                            <iframe width='853' height='480' src='https://my.matterport.com/show/?m=CikajWaJLMM'
                                    frameBorder='0' allowFullScreen allow='xr-spatial-tracking'></iframe>
                        </Box>
                    </Hidden>
                </Container>
            </section>
        </div>
    )
}
