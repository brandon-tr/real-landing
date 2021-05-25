import React from 'react';
import Head from 'next/head';
import {makeStyles, Typography} from "@material-ui/core";
import Menu from './components/Menu';
import ContactIndex from './components/contact/index';
import ReactPageScroller from "react-page-scroller";
import Meet from "./components/contact/meet";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
    background: {
        background: theme.palette.white.main,
        height: '100vh',
    },
}));



export default function Contact() {
    const [number, setNumber] = React.useState(0);

    const handlePageChange = number => {
        setNumber(number);
    };
    const handleBeforePageChange = number => {
        console.log(number);
    };

    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Head>
                <title>Waypoint</title>
                <meta name="description" content="Waypoint is a 3D virtual touring company based on Guam." />
                <link rel="icon" href="/Logo.png" />
                <meta property="og:url"                content="https://waypointgu.com/" />
                <meta property="og:type"               content="website" />
                <meta property="og:title"              content="Waypoint" />
                <meta property="og:description"        content="Waypoint is a 3D virtual touring company based on Guam." />
                <meta property="og:image"              content="https://waypoint-bucket.s3-us-west-1.amazonaws.com/icons/waypoint-frontPage.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <main>
                <Menu number={1} />
                <ReactPageScroller
                    pageOnChange={handlePageChange}
                    onBeforePageScroll={handleBeforePageChange}
                    customPageNumber={number}
                >
                    <ContactIndex/>
                    <Meet />
                </ReactPageScroller>
                <div className="outer">
                    {number % 2 === 0 ?
                        <Typography
                            className={classes.even}
                            style={{
                                fontFamily: 'Work Sans',
                                fontSize: '0.9rem',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: '22px',
                                letterSpacing: '0em',
                                transform: 'rotate(-90deg)',
                                marginBottom: '2rem',
                                paddingBottom: '5.0rem',
                                marginLeft: '0.8rem'
                            }}
                        >
                            scroll for more
                        </Typography>
                        :
                        <Typography
                            className={classes.odd}
                            style={{
                                fontFamily: 'Work Sans',
                                fontSize: '0.9rem',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                lineHeight: '22px',
                                letterSpacing: '0em',
                                transform: 'rotate(-90deg)',
                                marginBottom: '2rem',
                                paddingBottom: '5.0rem',
                                marginLeft: '0.8rem'
                            }}
                        >
                            scroll for more
                        </Typography>
                    }

                    {number === 0 ?
                        <>
                            <div style={{ padding: '0.2rem', marginLeft: '0.6rem' }}>
                                <Image src={"/dot.png"} width={30} height={30} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                        </>
                        : null}
                    {number === 1 ?
                        <>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '0.6rem' }}>
                                <Image src={"/dot.png"} width={30} height={30} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                        </>
                        : null}
                    {number === 2 ?
                        <>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '0.6rem' }}>
                                <Image src={"/dot.png"} width={30} height={30} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                        </>
                        : null}
                    {number === 3 ?
                        <>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '1.1rem' }}>
                                <Image src={"/dot.png"} width={12} height={12} />
                            </div>
                            <div style={{ padding: '0.2rem', marginLeft: '0.6rem' }}>
                                <Image src={"/dot.png"} width={30} height={30} />
                            </div>
                        </>
                        : null}
                </div>
            </main>
        </div>
    )
}
