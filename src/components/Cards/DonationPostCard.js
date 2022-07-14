import { Divider, Progress } from 'rsuite';
import Link from 'next/Link';

const DonationPostCard = ({}) => {
    return (
        <>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                <div className='wow fadeInUp group mb-10' data-wow-delay='.1s'>
                    <div className='mb-8 overflow-hidden rounded'>
                        <a href='blog-details.html' className='block'>
                            <img
                                src='assets/images/blog/blog-01.jpg'
                                alt='image'
                                className='w-full transition group-hover:rotate-6 group-hover:scale-125'
                            />
                        </a>
                    </div>
                    <div>
                        <div className='flex flex-wrap items-center justify-between pb-3 space-x-2 text-xs text-gray-400'>
                            <span>June 2, 2020</span>
                            <Link href={`/donationPost/1`}>
                                <a className='px-5 py-2 rounded bg-primary text-gray-50 hover:text-gray-200  hover:opacity-70 hover:shadow-lg'>
                                    Donate
                                </a>
                            </Link>
                        </div>
                        <h3>
                            <a
                                href='blog-details.html'
                                className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'
                            >
                                Meet AutoManage, the best AI management tools
                            </a>
                        </h3>
                        <p className='text-base text-body-color'>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                        </p>
                        <div className='flex flex-wrap justify-evenly mt-4'>
                            <div className='w-1/6'>
                                <Progress.Circle
                                    percent={30}
                                    strokeColor='#529b02'
                                />
                            </div>
                            <Divider vertical className='!h-12' />
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-400 flex'>
                                    <p className='font-semibold text-gray-600 mr-2'>
                                        Amount :
                                    </p>
                                    $250
                                </p>
                                <p className='text-gray-400 flex'>
                                    <p className='font-semibold text-gray-600 mr-2'>
                                        Left :
                                    </p>
                                    $200
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonationPostCard;
