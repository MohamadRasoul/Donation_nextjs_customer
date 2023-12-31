import Link from 'next/Link';
import { useAuth } from '@/hooks/auth';

const Navbar = () => {
    const { user, logout } = useAuth();

    return (
        <div className='absolute top-0 left-0 z-40 flex items-center w-full bg-transparent ud-header'>
            <div className='container'>
                <div className='relative flex items-center justify-between -mx-4'>
                    <div className='max-w-full px-4 w-60'>
                        <Link href={`/`}>
                            <a
                                href='index.html'
                                className='block w-full py-5 navbar-logo'
                            >
                                <img
                                    src='/assets/images/logo/logo-white.svg'
                                    alt='logo'
                                    className='w-full header-logo'
                                />
                            </a>
                        </Link>
                    </div>
                    <div className='flex items-center justify-between w-full px-4'>
                        <div>
                            <button
                                id='navbarToggler'
                                className='absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden'
                            >
                                <span className='relative my-[6px] block h-[2px] w-[30px] bg-white'></span>
                                <span className='relative my-[6px] block h-[2px] w-[30px] bg-white'></span>
                                <span className='relative my-[6px] block h-[2px] w-[30px] bg-white'></span>
                            </button>
                            <nav
                                id='navbarCollapse'
                                className='absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6'
                            >
                                <ul className='blcok lg:flex'>
                                    <li className='relative group'>
                                        <Link href={`/news`}>
                                            <a className='flex py-2 mx-8 text-base ud-menu-scroll text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'>
                                                News
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='relative group'>
                                        <Link href={`/charitableFoundations`}>
                                            <a className='flex py-2 mx-8 text-base ud-menu-scroll text-dark group-hover:text-primary lg:mr-0 lg:ml-7 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'>
                                                Charitable Foundation
                                            </a>
                                        </Link>
                                    </li>

                                    <li className='relative submenu-item group'>
                                        <a
                                            href='javascript:void(0)'
                                            className='relative mx-8 flex py-2 text-base text-dark after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:-translate-y-1/2 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary lg:mr-0 lg:ml-8 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 lg:text-white lg:after:right-0 lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-12'
                                        >
                                            Doantion Posts
                                        </a>
                                        <div className='submenu relative top-full left-0 hidden w-[250px] rounded-sm bg-white p-4 transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full'>
                                            <Link href={`/donationPost/cases`}>
                                                <a className='block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary'>
                                                    Cases
                                                </a>
                                            </Link>
                                            <Link href={`/donationPost/sponsorShips`} >
                                                <a className='block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary'>
                                                    SponsorShips
                                                </a>
                                            </Link>
                                            <Link href={`/donationPost/campaigns`}>
                                                <a className='block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary'>
                                                    Campaigns
                                                </a>
                                            </Link>
                                            <Link href={`/donationPost/supportPrograms`}>
                                                <a className='block rounded py-[10px] px-4 text-sm text-body-color hover:text-primary'>
                                                    Support Program
                                                </a>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {user ? (
                            <div className='justify-end hidden pr-16 sm:flex lg:pr-0'>
                                <a
                                    onClick={(e) => logout(e)}
                                    className='py-3 text-base font-medium text-white cursor-pointer loginBtn px-7 hover:opacity-70'
                                >
                                    Log Out
                                </a>
                            </div>
                        ) : (
                            <div className='justify-end hidden pr-16 sm:flex lg:pr-0'>
                                <Link href={`/signin`}>
                                    <a className='py-3 text-base font-medium text-white loginBtn px-7 hover:text-white hover:opacity-70'>
                                        Sign In
                                    </a>
                                </Link>
                                <Link href={`/signup`}>
                                    <a className='px-6 py-3 text-base font-medium text-white duration-300 ease-in-out bg-white rounded-lg signUpBtn bg-opacity-20 hover:bg-opacity-100 hover:text-dark focus:text-gray-50'>
                                        Sign Up
                                    </a>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
