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
    subText: {
        paddingTop: '1rem',
        paddingBottom: '5rem',
        fontSize: '1.5rem',
        color: theme.palette.secondary.second,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '28.8px',
        letterSpacing: '0em',
        textAlign: "left"
    },
    white: {
        color: theme.palette.secondary.main
    },
}));

export default function pageOne(props) {
    const classes = useStyles();
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
            <section>
                <Container fixed>
                    <Hidden lgDown>
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column"
                             style={{height: '80vh'}}>
                            <Typography style={{ fontFamily: 'Blatant', fontSize: '7rem', fontWeight: 'bold', alignSelf: "flex-start" }} className={classes.white}>Waypoint</Typography>
                            <Typography style={{ alignSelf: "flex-start" }} className={classes.subText}>Reimagining the way we view
                                spaces
                            </Typography>
                            <Button
                                onClick={props.setPageFour}
                                variant="contained"
                                style={{
                                    height: '59px',
                                    width: '300px',
                                    borderRadius: '40px',
                                    background: 'linear-gradient(180deg, #8ED8EF 0%, #BAE0C2 100%)',
                                    alignSelf: "flex-start",
                                    zIndex: 1
                                }}
                            >
                                <Typography color="primary" style={{

                                    fontFamily: 'Work Sans',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '29px',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                    textTransform: 'lowercase',

                                }}>
                                    <span style={{ textTransform: 'uppercase' }}>T</span>ake a tour
                                </Typography>
                            </Button>
                        </Box>
                    </Hidden>
                    <Hidden only={["xs", "sm", "md", "xl"]}>
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column"
                             style={{height: '80vh', paddingLeft: '10rem'}}>
                            <Typography style={{ fontFamily: 'Blatant', fontSize: '7rem', fontWeight: 'bold', alignSelf: "flex-start" }} className={classes.white}>Waypoint</Typography>
                            <Typography style={{ alignSelf: "flex-start" }} className={classes.subText}>Reimagining the way we view
                                spaces
                            </Typography>
                            <Button
                                onClick={props.setPageFour}
                                variant="contained"
                                style={{
                                    height: '59px',
                                    width: '300px',
                                    borderRadius: '40px',
                                    background: 'linear-gradient(180deg, #8ED8EF 0%, #BAE0C2 100%)',
                                    alignSelf: "flex-start",
                                    zIndex: 1
                                }}
                            >
                                <Typography color="primary" style={{

                                    fontFamily: 'Work Sans',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '29px',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                    textTransform: 'lowercase',

                                }}>
                                    <span style={{ textTransform: 'uppercase' }}>T</span>ake a tour
                                </Typography>
                            </Button>
                        </Box>
                    </Hidden>
                    <Hidden lgUp>
                        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column"
                             style={{height: '80vh', width: '100vw'}}>
                            <Typography style={{ fontFamily: 'Blatant', fontSize: '7rem', fontWeight: 'bold' }} className={classes.white}>Waypoint</Typography>
                            <Typography className={classes.subText}>Reimagining the way we view
                                spaces
                            </Typography>
                            <Button
                                onClick={props.setPageFour}
                                variant="contained"
                                style={{
                                    height: '59px',
                                    width: '300px',
                                    borderRadius: '40px',
                                    background: 'linear-gradient(180deg, #8ED8EF 0%, #BAE0C2 100%)',
                                    zIndex: 1
                                }}
                            >
                                <Typography color="primary" style={{

                                    fontFamily: 'Work Sans',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '29px',
                                    letterSpacing: '0em',
                                    textTransform: 'lowercase',

                                }}>
                                    <span style={{ textTransform: 'uppercase' }}>T</span>ake a tour
                                </Typography>
                            </Button>
                        </Box>
                    </Hidden>
                </Container>
            </section>
            <Hidden mdDown>
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    height: '90vh',
                    width: '98vw',
                    zIndex: 0,
                    WebkitTransform: 'translate(20%, 0)',
                    transform: 'translate(20%, 0)',
                }}>
                    <Image src={"/remote.png"} layout="fill" alt="special 3d camera" />
                </div>
            </Hidden>
        </div>
    )
}
