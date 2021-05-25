import {AppBar, Box, Hidden, IconButton, Toolbar, makeStyles,} from "@material-ui/core";
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
    },
    oddMenu: {
        color: theme.palette.primary.main,
        fontFamily: 'Work Sans',
        fontSize: '1.3rem',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '29px',
        letterSpacing: '0em',
        textAlign: 'center'
    }
}));

export default function pageOne(props) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" style={{background: 'transparent', boxShadow: 'none'}}>
            <Toolbar>
                <div style={{padding: '2rem 5rem 0 5rem'}}>
                    <Image src={"/Logo.png"} width={50} height={50} />
                </div>
                <div style={{flexGrow: 1}}/>
                <Hidden only={['lg', 'xl']}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
                <Hidden mdDown>
                    <Box display="flex">
                        <Link href="/">
                            <a className={props.number % 2 === 0 ? classes.root : classes.oddMenu} style={{padding: '2rem 4.5rem 0 1rem'}}>Home</a>
                        </Link>
                        <Link href="/">
                            <a className={props.number % 2 === 0 ? classes.root : classes.oddMenu} style={{padding: '2rem 4.5rem 0 1rem'}}>Services</a>
                        </Link>
                        <Link href="/">
                            <a className={props.number % 2 === 0 ? classes.root : classes.oddMenu} style={{padding: '2rem 4.5rem 0 1rem'}}>How it Works</a>
                        </Link>
                        <Link href="/">
                            <a className={props.number % 2 === 0 ? classes.root : classes.oddMenu} style={{padding: '2rem 4.5rem 0 1rem'}}>Gallery</a>
                        </Link>
                        <Link href="/contact">
                            <a className={props.number % 2 === 0 ? classes.root : classes.oddMenu} style={{padding: '2rem 4.5rem 0 1rem'}}>Contact Us</a>
                        </Link>
                        <Link href="/">
                            <a className={props.number % 2 === 0 ? classes.root : classes.oddMenu} style={{padding: '2rem 4.5rem 0 1rem'}}> <Image src={"/dashboard.png"}
                                                                                                                                             width={25} height={25} alt="user icon"/>
                            </a>
                        </Link>
                    </Box>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}
