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

export default function pageTwo() {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <Image src={"/Logo.png"} width={50} height={50}/>
                    <div style={{flexGrow: 1}}/>
                    <Hidden only={['md', 'lg', 'xl']}>
                        <IconButton edge="start" color="primary" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                    <Hidden smDown>
                        <Box display="flex">
                            <Link href="/">
                                <a className={classes.root} style={{padding: '0 1rem'}}>Home</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '0 1rem'}}>Services</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '0 1rem'}}>How it Works</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '0 1rem'}}>Gallery</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '0 1rem'}}>Contact Us</a>
                            </Link>
                            <Link href="/">
                                <a className={classes.root} style={{padding: '0 1rem'}}> <Image src={"/dashboard.png"}
                                                                                                width={25} height={25}/>
                                </a>
                            </Link>
                        </Box>
                    </Hidden>
                </Toolbar>
            </AppBar>
            <section>
                <Container style={{ height: '98vh' }}>
                    <Box display="flex">
                        <Grid container justify="center" alignItems="center" style={{ height: '98vh' }}>
                            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} align="center">
                                <Image src="/3dscan.png" width={771} height={631} alt="3dscan" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{ height: '50vh', padding: '0 1rem' }}>
                                <Box alignItems="flex-start">
                                    <Typography style={{

                                        fontFamily: 'Blatant',
                                        fontSize: '4rem',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        lineHeight: '77px',
                                        letterSpacing: '0em',
                                        paddingBottom: '20px',

                                    }} className={classes.aboutUsColor}>About us</Typography>
                                    <Typography style={{

                                        fontFamily: 'Work Sans',
                                        fontSize: '1.5rem',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: '29px',
                                        letterSpacing: '0em',
                                        textAlign: 'left',

                                    }} className={classes.aboutUsDescription}>Waypoint is a 3D virtual touring company based on Guam.</Typography>
                                    <Grid container spacing={3} justify="center" alignItems="center">
                                        <Grid item xs={2} sm={2} align="center">
                                            <div style={{ border: '3px solid #8D78B7' }} />
                                        </Grid>
                                        <Grid item xs={10} sm={10}>
                                            <Typography style={{

                                                padding: '20px 0',
                                                fontFamily: 'Work Sans',
                                                fontSize: '1rem',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                lineHeight: '22px',
                                                letterSpacing: '0em',
                                                textAlign: 'left'

                                            }} className={classes.aboutUsSubtext}>Showcase your business or property by immersing your customers in our virtual tours!</Typography>
                                        </Grid>
                                    </Grid>
                                    <Hidden smDown>
                                        <Box display="flex" alignContent="flex-end" style={{ height: '30vh' }}>
                                            <Button variant="contained"
                                                    style={{
                                                        height: '59px',
                                                        width: '300px',
                                                        borderRadius: '40px',
                                                        background: 'linear-gradient(180deg, #6D58A5 0%, #8D78B7 100%)'
                                                    }}
                                                    className={classes.secondarySecond}
                                            >
                                                <Typography style={{

                                                    fontFamily: 'Work Sans',
                                                    fontSize: '18px',
                                                    fontStyle: 'normal',
                                                    fontWeight: '700',
                                                    lineHeight: '29px',
                                                    letterSpacing: '0em',
                                                    textAlign: 'center',

                                                }}>
                                                    Take a tour
                                                </Typography>
                                            </Button>
                                        </Box>
                                    </Hidden>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </section>
        </div>
    )
}
