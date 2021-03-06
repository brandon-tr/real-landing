import {
    AppBar,
    Box,
    Collapse,
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
    },
    white: {
        color: theme.palette.white.main,
    },
    descripText: {
        color: theme.palette.white.main,
        fontFamily: 'Work Sans',
        fontSize: '140%',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '22px',
        letterSpacing: '0em',
        padding: '4.3% 0'
    },
    tours: {
        color: theme.palette.secondary.third,
    },
    lightBlue: {
        color: theme.palette.secondary.second
    }
}));

export default function pageThree() {
    const [virtTours, setVirtTours] = React.useState(false);
    const [floorPlan, setFloorPlan] = React.useState(false);
    const [website, setWebsite] = React.useState(false);
    const handleVirtTours = () => {
        if(virtTours) {
            setVirtTours(false)
        } else {
            setVirtTours(true)
        }
    }
    const handleFloorPlan = () => {
        if(floorPlan) {
            setFloorPlan(false)
        } else {
            setFloorPlan(true)
        }
    }
    const handleWebsite = () => {
        if(website) {
            setWebsite(false)
        } else {
            setWebsite(true)
        }
    }
    const classes = useStyles();
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
            <section>
                <Container fixed>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                            <Box display="flex" alignItems="center" style={{ height: '38vh', marginBottom: '-5rem' }}>
                                <Typography
                                    className={classes.white}
                                    style={{

                                        fontSize: '3rem',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: '48px',
                                        letterSpacing: '0em',
                                        textAlign: 'left'

                                    }}>
                                    <span className={classes.lightBlue}>Capture</span> and
                                    <span className={classes.lightBlue}> share </span>
                                    your space
                                    with our services
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" alignItems="center" spacing={3} style={{ paddingLeft: '4rem' }}>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div style={{ paddingLeft: '8.3rem' }}>
                                <Image src={"/3dtour.png"} width={100} height={100} />
                            </div>
                            <Typography className={classes.tours} style={{
                                paddingTop: '2rem',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '24px',
                                letterSpacing: '0em',
                                textAlign: 'center'
                            }}>
                                3D Virtual Tours
                            </Typography>
                            <Collapse in={virtTours}>
                                <div>
                                    <Typography className={classes.descripText}>
                                        Engage your customers and standout from your competition
                                    </Typography>
                                    <Typography className={classes.descripText}>
                                        Accurately portray your property or business
                                    </Typography>
                                    <Typography className={classes.descripText}>
                                        Use 3D View or DollHouse view to rotate and zoom
                                    </Typography>
                                </div>
                            </Collapse>
                            <div
                                onClick={handleVirtTours}
                                style={{
                                    paddingLeft: '10.7rem',
                                    paddingTop: '1.3rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <Image src={"/arrow.png"} width={30} height={30} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div style={{ paddingLeft: '7.8rem' }}>
                                <Image src={"/floorplan.png"} width={100} height={100} />
                            </div>
                            <Typography className={classes.tours} style={{
                                paddingTop: '2rem',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '24px',
                                letterSpacing: '0em',
                                textAlign: 'center'
                            }}>
                                Floor Plans
                            </Typography>
                            <Collapse in={floorPlan}>
                                <div>
                                    <Typography className={classes.descripText}>
                                        Produce precise floor plans from our 3D scans
                                    </Typography>
                                    <Typography className={classes.descripText}>
                                        Remove the need for tedious measurements
                                    </Typography>
                                    <Typography className={classes.descripText}>
                                        Customizable and able to match your brand
                                    </Typography>
                                </div>
                            </Collapse>
                            <div
                                onClick={handleFloorPlan}
                                style={{
                                    paddingLeft: '10.8rem',
                                    paddingTop: '1.3rem',
                                    cursor: 'pointer'
                                }}>
                                <Image src={"/arrow.png"} width={30} height={30} />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <div style={{ paddingLeft: '8.3rem' }}>
                                <Image src={"/website.png"} width={100} height={100} />
                            </div>
                            <Typography className={classes.tours} style={{
                                paddingTop: '2rem',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '24px',
                                letterSpacing: '0em',
                                textAlign: 'center'
                            }}>
                                Websites
                            </Typography>
                            <Collapse in={website}>
                                <div>
                                    <Typography className={classes.descripText}>
                                        Engage your customers and standout from your competition
                                    </Typography>
                                    <Typography className={classes.descripText}>
                                        Accurately portray your property or business
                                    </Typography>
                                    <Typography className={classes.descripText}>
                                        Use 3D View or DollHouse view to rotate and zoom
                                    </Typography>
                                </div>
                            </Collapse>
                            <div
                                onClick={handleWebsite}
                                style={{
                                    paddingLeft: '10.9rem',
                                    paddingTop: '1.3rem',
                                    cursor: 'pointer'
                                }}>
                                <Image src={"/arrow.png"} width={30} height={30} />
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
    )
}
