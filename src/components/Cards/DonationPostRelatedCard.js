import { Divider, Progress } from 'rsuite';
import Link from 'next/Link';
import moment from 'moment';

const DonationPostRelatedCard = ({ donationPost }) => {
    return (
        <>
            <div className="w-full px-4 md:w-1/2 lg:w-6/12">
                <Link href={`/donationPost/${donationPost.id}?donationPostType=${donationPost.post_type_id}`}>
                    <a>
                        <div className="mb-10 wow fadeInUp group" data-wow-delay=".1s">
                            <div className="mb-8 overflow-hidden rounded">
                                <a className="block">
                                    <img
                                        src={donationPost.image}
                                        alt="image"
                                        className="object-cover object-center w-full transition aspect-5/3 group-hover:rotate-6 group-hover:scale-125"
                                    />
                                </a>
                            </div>
                            <div>
                                <span
                                    className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary"
                                >
                                    {moment(donationPost.start_date).format('MMMM Do YYYY')}
                                </span>
                                <h3>
                                    <a
                                        className="inline-block mb-4 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                    >
                                        {donationPost.title}
                                    </a>
                                </h3>
                                <p className="text-base text-body-color max-h-32">
                                    {donationPost.description}

                                </p>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    );
};

export default DonationPostRelatedCard;
