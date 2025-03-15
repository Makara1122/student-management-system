import Layout from '@/components/Layout';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="About">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <h1 className={'pt-30 text-black '}> This is about page </h1>
        </>
    );
}

About.layout = (page) => <Layout children={page} title="about" />;
