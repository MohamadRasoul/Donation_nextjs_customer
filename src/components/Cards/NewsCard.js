import moment from 'moment';
import Link from 'next/Link';

const NewsCard = ({ news }) => {
    return (
        <div className='wow fadeInUp group' data-wow-delay='.1s'>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 shadow-xl sm:space-y-12">
                <a className="block max-w-sm gap-5 mx-auto sm:max-w-full hover:text-gray-500 lg:grid lg:grid-cols-12">
                    <img src={news.image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 " />
                    <div className="px-6 pt-6 space-y-5 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl ">{news.title}</h3>
                        <span className="">{
                            moment(
                                news.updated_at
                            ).format('MMMM Do YYYY')}
                        </span>
                        <p className="text-lg">{news.description}</p>
                        <Link href={`/charitableFoundations/${news.charitablefoundation_id}`}>
                            <div className='flex items-center cursor-pointer'>
                                <a className='relative block'>
                                    <img
                                        alt='profil'
                                        src={news.charitablefoundation_image}
                                        className='object-cover w-16 h-16 mx-auto rounded-full '
                                    />
                                </a>
                                <div className='flex justify-center ml-4 text-xl font-semibold'>
                                    <p className='text-gray-800 '>{news.charitablefoundation}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </a>

            </div>
        </div>
    );
};

export default NewsCard;
