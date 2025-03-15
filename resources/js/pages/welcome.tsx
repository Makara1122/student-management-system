import Layout from '@/components/Layout';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Head } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';

export function Example() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            // ...
        </Carousel>
    );
}

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className={'pt-10 text-wrap text-white'}>
                <h1 className={'bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text pt-30 text-center text-4xl font-extrabold text-transparent'}>
                    Welcome to Royal University of Phnom Penh
                </h1>

                <p className={'inline-block text-center align-middle text-black md:px-10'}>
                    The Royal University of Phnom Penh (RUPP) is the national university of Cambodia. It was established in 1960. It is the oldest and
                    largest university in Cambodia. It hosts more than 18,000 students in undergraduate and graduate programs. The university has more
                    than 500 faculty members. The medium of instruction is Khmer language, although several foreign languages are used in specific
                    programs. The university offers a wide range of programs, including social sciences, humanities, natural sciences, health
                    sciences, engineering, and technology. The main campus is located in the capital Phnom Penh.
                </p>
            </div>

            {/*    carousel     */}
            <div className={'z-10 container py-10 md:mx-auto md:px-20'}>
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                >
                    <CarouselContent className={'-ml-2 text-black md:-ml-4'}>
                        <CarouselItem className="md:pg-4 md:basis-1/2 lg:basis-1/3">
                            <img src={'/images/rupp-image3.jpg'} className="w-full rounded-md object-cover object-center md:h-96" />
                        </CarouselItem>
                        <CarouselItem className="md:pg-4 md:basis-1/2 lg:basis-1/3">
                            <img src={'/images/rupp-image2.jpg'} className="w-full rounded-md object-cover object-center md:h-96" />
                        </CarouselItem>
                        <CarouselItem className="md:pg-4 md:basis-1/2 lg:basis-1/3">
                            <img src={'/images/rupp-image4.jpg'} className="w-full rounded-md object-cover object-center md:h-96" />
                        </CarouselItem>
                        <CarouselItem className="md:pg-4 md:basis-1/2 lg:basis-1/3">
                            <img src={'/images/rupp-image5.jpg'} className="w-full rounded-md object-cover object-center md:h-96" />
                        </CarouselItem>
                        <CarouselItem className="md:pg-4 md:basis-1/2 lg:basis-1/3">
                            <img src={'/images/rupp-image6.jpg'} className="w-full rounded-md object-cover object-center md:h-96" />
                        </CarouselItem>
                        <CarouselItem className="md:pg-4 md:basis-1/2 lg:basis-1/3">
                            <img src={'/images/rupp-image7.jpg'} className="w-full rounded-md object-cover object-center md:h-96" />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            {/*    description   */}
            <section className={'flex items-center justify-evenly bg-white py-10 text-white md:px-10'}>
                <div className={'h-72 w-96 rounded-md bg-white p-1 text-wrap'}>
                    {/*    social change    */}
                    <div
                        className={
                            'w-32 hover:border-b-gray-400 hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:transition hover:duration-500'
                        }
                    >
                        <h3
                            className={
                                'bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text font-extrabold text-transparent italic hover:text-white'
                            }
                        >
                            New Innovation
                        </h3>
                    </div>
                    <h1 className={'font-sans text-2xl font-bold text-black'}>Cambodia's innovation of tech</h1>
                    <p className={'font-thin text-black'}>
                        Technological innovation drives rapid tops and across industries by developing new technologies and improving existing ones.
                        It solves problems, enhances efficiency, and creates opportunities. Innovations like AI, machine learning, blockchain, and
                        quantum computing transform our lives work.
                    </p>

                    <br />
                    <p className={'text-sm text-black'}>
                        Author: <span className={'text-sm font-bold text-black'}>John Doe</span>
                        <br />
                        Date: <span className={'text-sm font-thin text-black'}>15.03.2025</span>
                    </p>
                </div>
                <div className={'h-72 w-96 rounded-md bg-green-600 text-wrap'}>
                    {/*    video and animation and autoplay of innovation  */}
                    <video
                        className={
                            'h-full w-full rounded-md object-cover hover:border-t-4 hover:border-r-4 hover:border-gray-500 hover:transition hover:duration-700'
                        }
                        controls
                        autoPlay
                        loop
                        muted
                    >
                        <source
                            src={
                                'http://rsms.makara.rocks/videos/video-rsms.mp4'
                            }
                            type={'video/mp4'}
                        />
                    </video>
                </div>
            </section>
        </>
    );
}

Welcome.layout = (page) => <Layout children={page} title="welcome" />;
