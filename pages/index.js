import React from 'react';
import Head from 'next/head';
import ReactPageScroller from 'react-page-scroller';
import PageOne from './components/index/PageOne';
import PageTwo from './components/index/PageTwo';
import PageThree from './components/index/PageThree';
import PageFour from './components/index/PageFour';
import Image from 'next/image';
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    even: {
        color: theme.palette.secondary.third
    },
    odd: {
        color: theme.palette.primary.dark
    },
}));



export default function Home() {
    const classes = useStyles();
    const [number, setNumber] = React.useState(0);

    const handlePageChange = number => {
        setNumber(number);
    };
    const setPageFour = () => {
        setNumber(3);
    };
    const handleBeforePageChange = number => {
        console.log(number);
    };
    return (
        <div>
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
                <section>
                    <ReactPageScroller
                        pageOnChange={handlePageChange}
                        onBeforePageScroll={handleBeforePageChange}
                        customPageNumber={number}
                    >
                        <PageOne setPageFour={setPageFour} />
                        <PageTwo setPageFour={setPageFour} />
                        <PageThree />
                        <PageFour />
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
                </section>
            </main>
        </div>
    )
}
