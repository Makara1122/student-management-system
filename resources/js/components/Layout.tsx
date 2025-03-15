import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from '@inertiajs/react';

export default function Layout({ children }) {
    return (
        <main className={'flex  relative min-h-screen flex-col bg-[url("/images/rupp-background.jpg")] bg-cover bg-scroll bg-center md:bg-fixed'}>
            {/* navigation bar */}
            <header className={'bg-gray-100 z-20 bg-linear-to-r fixed left-0 right-0 top-0 from-cyan-500 to-blue-500 py-6 text-white shadow-md'}>
                <nav className={'container mx-auto flex items-center justify-between'}>
                    <div className={'px-10'}>
                        <Link href={'/'} className={'transition duration-300 hover:text-blue-200'}>
                            {/*    container of avatar and name of logo */}
                            <div className={'m-0 flex items-center space-x-4 p-0'}>
                                <div>
                                    {/* logo goes here */}
                                    <Avatar className={'h-16 w-16 rounded-full hover:cursor-pointer'}>
                                        <AvatarImage src="images/rupp-logo.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <h1 className={'text-2xl font-bold'}>សកលវិទ្យាល័យភូមិន្ទភ្នំពេញ</h1>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className={'flex space-x-4 px-10'}>
                        <Link href={'/'} className={'transition duration-300 hover:text-blue-200'}>
                            Home
                        </Link>

                        <Link href={'/about'} className={'transition duration-300 hover:text-blue-200'}>
                            About
                        </Link>

                        <Link href={'/contact'} className={'transition duration-300 hover:text-blue-200'}>
                            Contact
                        </Link>
                    </div>
                </nav>
            </header>

            <article>{children}</article>
        </main>
    );
}
