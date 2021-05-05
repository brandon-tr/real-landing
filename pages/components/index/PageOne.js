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
    },
    subText: {
        fontSize: '18px',
        color: theme.palette.secondary.second,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '28.8px',
        letterSpacing: '0em',
    }
}));

export default function pageOne() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static" style={{background: 'transparent', boxShadow: 'none'}}>
                <Toolbar>
                    <Image src={"/Logo.png"} width={50} height={50}/>
                    <div style={{flexGrow: 1}}/>
                    <Hidden only={['md', 'lg', 'xl']}>
                        <IconButton edge="start" color="inherit" aria-label="menu">
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
                <Container fixed>
                    <Grid container style={{height: '90vh'}} spacing={0}>
                        <Hidden smDown>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} style={{paddingLeft: '5rem'}}>
                                <Box display="flex" alignItems="center" justifyContent="center"
                                     style={{height: '100%', width: '100%'}}>
                                    <Grid container>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <Image src="/waypoint-frontPage.png" width={320} height={80}/>
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <Typography className={classes.subText}>Reimagining the way we view
                                                spaces</Typography>
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12} style={{paddingTop: '8rem'}}>
                                            <Button variant="contained"
                                                    style={{
                                                        height: '59.66851043701172px',
                                                        width: '300px',
                                                        borderRadius: '40px',
                                                        background: 'linear-gradient(180deg, #8ED8EF 0%, #BAE0C2 100%)'
                                                    }}
                                            >
                                                Take a tour
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Hidden>
                        <Hidden only={['md', 'lg', 'xl']}>
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Box display="flex" alignItems="center" justifyContent="center"
                                     style={{height: '100%', width: '100%'}}>
                                    <Grid container>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <Image src="/waypoint-frontPage.png" width={320} height={80}/>
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <Typography className={classes.subText}>Reimagining the way we view
                                                spaces</Typography>
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12} style={{paddingTop: '8rem'}}>
                                            <Button variant="contained"
                                                    style={{
                                                        height: '59.66851043701172px',
                                                        width: '300px',
                                                        borderRadius: '40px',
                                                        background: 'linear-gradient(180deg, #8ED8EF 0%, #BAE0C2 100%)'
                                                    }}
                                            >
                                                Take a tour
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Hidden>

                        <Hidden smDown>
                            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                                <div className="div-wrapper">
                                    <img src="/remote.png"/>
                                </div>
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
            </section>
        </>
    )
}