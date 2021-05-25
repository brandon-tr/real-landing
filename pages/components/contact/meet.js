import React from "react";
import {Box, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
    resolutionOuter: {
        [theme.breakpoints.up('md')]: {
            padding: '50px',
            marginTop: '40%'
        },
        [theme.breakpoints.up('xl')]: {
            padding: '80px 0 80px 0',
            width: '92%'
        },
    },
    textLight: {
        color: theme.palette.primary.light
    }
}));

export default function Meet() {
    const  classes = useStyles();
    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    top: '120%',
                    left: '50%',
                    /* bring your own prefixes */
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <Typography color="primary" style={{
                    fontFamily: 'Blatant',
                    fontSize: '48px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '48px',
                    letterSpacing: '0em',
                    textAlign: 'center'

                }}>
                    Meet the Team
                </Typography>
            </div>
            <Container>
                <Grid container spacing={8} style={{height: '100vh'}} justify="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={6} lg={5} xl={6}>
                        <div className={classes.resolutionOuter} style={{
                            background: 'linear-gradient(180deg, rgba(142, 216, 239, 0.5) 0%, rgba(186, 224, 194, 0.5) 100%)',
                            borderRadius: '20px'
                        }}>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Image src="/jolli.png" width={450} height={450} />
                                <Typography className={classes.textLight} style={{
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: '24px',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                    paddingTop: '1rem'
                                }}>
                                    Jolybii Song
                                </Typography>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={5} xl={6}>
                        <div className={classes.resolutionOuter} style={{
                            background: 'linear-gradient(180deg, rgba(142, 216, 239, 0.5) 0%, rgba(186, 224, 194, 0.5) 100%)',
                            borderRadius: '20px'
                        }}>
                            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                <Image src="/jay.png" width={450} height={450} />
                                <Typography className={classes.textLight} style={{
                                    fontFamily: 'Work Sans',
                                    fontSize: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: '24px',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                    paddingTop: '1rem'
                                }}>
                                    Jay Milan
                                </Typography>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
