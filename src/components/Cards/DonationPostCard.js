import { Divider, Progress } from 'rsuite';
import Link from 'next/Link';
import moment from 'moment';

const DonationPostCard = ({ donationPost }) => {
    return (
        <>
            <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
                <div className='wow fadeInUp group mb-10' data-wow-delay='.1s'>
                    <div className='mb-8 overflow-hidden rounded'>
                        <a href='blog-details.html' className='block'>
                            <img
                                src={donationPost.image}
                                alt='image'
                                className='aspect-5/3 object-center object-cover w-full transition group-hover:rotate-6 group-hover:scale-125'
                            />
                        </a>
                    </div>
                    <div>
                        <div className='flex flex-wrap items-center mb-4 justify-between  space-x-2 text-xs text-gray-400 '>
                            <div className='flex items-center'>
                                <a href='#' className='block relative'>
                                    <img
                                        alt='charitableFoundation image'
                                        src={
                                            donationPost.charitableFoundation_image
                                        }
                                        className='mx-auto object-cover rounded-full h-10 w-10 '
                                    />
                                </a>
                                <div className='flex justify-center ml-3 text-base font-semibold text-gray-600 '>
                                    <p className='text-gray-80'>
                                        {donationPost.charitableFoundation}
                                    </p>
                                </div>
                            </div>
                            <span>
                                {moment(donationPost.start_date).format(
                                    'D MMMM YYYY'
                                )}
                            </span>
                        </div>
                        {/* <Divider/> */}
                        <h3>
                            <Link href={`/donationPost/1`}>
                                <a className='mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                                    {donationPost.title}
                                </a>
                            </Link>
                        </h3>

                        <p className='text-base text-body-color'>
                            {donationPost.description}
                        </p>

                        <div className='flex justify-start my-5'>
                            {donationPost.status_types.map((statusType) => (
                                <span className='px-2 py-1 mb-2 mr-2 text-xs text-gray-100 rounded-md bg-primary opacity-60 hover:opacity-100 hover:text-white'>
                                    {statusType.title}
                                </span>
                            ))}
                        </div>
                        <div className='flex flex-wrap justify-evenly mt-4'>
                            <div className='w-1/6'>
                                <Progress.Circle
                                    percent={Math.round(
                                        (donationPost.amount_donated /
                                            donationPost.amount_required) *
                                            100
                                    )}
                                    strokeColor='#529b02'
                                />
                            </div>
                            <Divider vertical className='!h-12' />
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-400 flex'>
                                    <p className='font-semibold text-gray-600 mr-2'>
                                        Amount :
                                    </p>
                                    ${donationPost.amount_required}
                                </p>
                                <p className='text-gray-400 flex'>
                                    <p className='font-semibold text-gray-600 mr-2'>
                                        Left :
                                    </p>
                                    $
                                    {donationPost.amount_required -
                                        donationPost.amount_donated}
                                </p>
                            </div>
                        </div>
                        <div className='mt-5 flex items-center'>
                            <Link href={`/donationPost/1`}>
                                <a className='px-5 py-2 w-full text-center rounded-lg bg-primary text-gray-50 hover:text-gray-200  hover:opacity-70 hover:shadow-lg'>
                                    Donate
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonationPostCard;
