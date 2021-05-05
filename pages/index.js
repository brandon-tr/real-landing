import React from 'react';
import Head from 'next/head';
import ReactPageScroller from 'react-page-scroller';
import PageOne from './components/index/PageOne';
import PageTwo from './components/index/PageTwo';


export default function Home() {
    const [number, setNumber] = React.useState(0);

    const handlePageChange = number => {
        setNumber(number);
    };

    const handleBeforePageChange = number => {
        console.log(number);
    };
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <section>
                    <ReactPageScroller
                        pageOnChange={handlePageChange}
                        onBeforePageScroll={handleBeforePageChange}
                        customPageNumber={number}
                    >
                        <PageOne />
                        <PageTwo />
                    </ReactPageScroller>
                </section>
            </main>
        </div>
    )
}
