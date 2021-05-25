import {Box, Button, Container, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    resolutionSendMessageDiv: {
        [theme.breakpoints.between('md','lg')]: {
            marginTop: '20%'
        },
    },
}));


export default function ContactIndex() {
    const classes = useStyles();
    return (
        <Container>
            <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Typography
                            color="primary"
                            style={{
                                fontSize: '64px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '64px',
                                letterSpacing: '0em',
                                padding: '20px',
                                textAlign: 'left',
                                width: '100%'
                            }}>
                            Contact Us
                        </Typography>
                        <Typography className={classes.resolutionContactUs} style={{
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '38.4px',
                            letterSpacing: '0em',
                            padding: '20px 20px 25px 20px'
                        }}>
                            Requesting a quote? Want to get your property scanned? Fill out our form and we will get back to you as soon as possible!
                        </Typography>
                        <div style={{border: '3px solid #6D58A5', width: '95%'}} />
                        <Typography className={classes.resolutionContactUs} style={{
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '38.4px',
                            letterSpacing: '0em',
                            padding: '20px 0 0 20px',
                            width: '100%'
                        }}>
                            Email: waypointgu@gmail.com
                        </Typography>
                        <Typography style={{
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '38.4px',
                            letterSpacing: '0em',
                            paddingLeft: '20px',
                            width: '100%'
                        }}>
                            Phone Number: 671-929-6369
                        </Typography>
                        <Typography style={{
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '38.4px',
                            letterSpacing: '0em',
                            paddingLeft: '20px',
                            width: '100%'
                        }}>
                            Our Location: TBD
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={7} style={{paddingLeft: '5rem'}}>
                    <div className={classes.resolutionSendMessageDiv} style={{
                        background: 'linear-gradient(180deg, rgba(142, 216, 239, 0.5) 0%, rgba(186, 224, 194, 0.5) 100%)',
                        width: '100%',
                        minHeight: '50vh',
                        borderRadius: '20px'
                    }}>
                        <Typography style={{
                            fontSize: '36px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '36px',
                            letterSpacing: '0em',
                            textAlign: 'center',
                            padding: '20px'
                        }}>
                            Send us a message
                        </Typography>
                        <form style={{ width: '100%' }}>
                            <Grid container justify="center" alignItems="center">
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: '20px 50px 10px 50px' }}>
                                    <TextField id="outlined-basic" label="Name" variant="outlined" style={{width: '90%', background: 'white'}} />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: '20px 50px 10px 50px' }}>
                                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '90%', background: 'white'}}/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: '20px 50px 10px 50px' }}>
                                    <TextField id="outlined-basic" multiline rows={10} label="Message" variant="outlined" style={{width: '90%', background: 'white'}}/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ padding: '20px 50px 10px 50px' }}>
                                    <Button variant="contained" color="primary" style={{
                                        height: '65px',
                                        width: '92%',
                                        borderRadius: '15px'
                                    }}>
                                        <Typography style={{
                                            fontSize: '18px',
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            lineHeight: '38px',
                                            letterSpacing: '0em',
                                            textAlign: 'center'
                                        }}>Submit</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
