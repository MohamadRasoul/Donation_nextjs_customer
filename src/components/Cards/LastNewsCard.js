import moment from 'moment';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Spinner from '../UI/Spinner';

const LastNewsCard = ({ selectedBranch }) => {
    //#region State   ####################################
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    //#endregion

    //#region Hook   ####################################
    const router = useRouter();
    const { charitableFoundationId } = router.query;

    const { data: newsData, newsError } = useSWR(
        `/user/news/charitablefoundation/${charitableFoundationId}/index?filter[branch_id]=${selectedBranch}`
    );

    useEffect(() => {
        setLoading(true);
        if (newsData) {
            setNews(newsData.data.news);
            setLoading(false);
        }
    }, [newsData]);
    //#endregion

    //#region Function   ####################################
    //#endregion

    //#region Jsx   ####################################
    return (
        <div className='flex flex-wrap mb-8 -mx-4'>
            <div className='w-full px-4'>
                <div className='flex items-center justify-between w-full'>
                    <h2
                        className='wow fadeInUp relative py-5 text-2xl font-semibold text-dark sm:text-[28px]'
                        data-wow-delay='.1s
                    '
                    >
                        Last News
                    </h2>
                    <Link href={`/news`}>
                        <a className='text-lg text-gray-400 capitalize hover:text-primary'>
                            view all &gt;
                        </a>
                    </Link>
                </div>
                <span className='mb-5 inline-block h-[2px] w-20 bg-primary'></span>
            </div>
            <Spinner loading={loading} isEmpty={!news.length}>
                {news.slice(0, 5).map((news) => (
                    <div className='w-full mx-4 border-b border-gray-200 md:w-1/2 lg:w-full'>
                        <div
                            className='flex items-center w-full py-5 wow fadeInUp'
                            data-wow-delay='.1s
            '
                        >
                            <div className='mr-5 h-20 w-full max-w-[80px] overflow-hidden rounded-full'>
                                <img
                                    src={news.image}
                                    alt='image'
                                    className='w-full'
                                />
                            </div>
                            <div className='w-full'>
                                <h4>
                                    <Link
                                        href={`/news?charitableFoundationId=${charitableFoundationId}`}
                                    >
                                        <a className='inline-block mb-1 text-lg font-medium leading-snug text-dark hover:text-primary lg:text-base xl:text-lg'>
                                            {news.title}
                                        </a>
                                    </Link>
                                </h4>
                                <p className='max-w-[12rem] text-sm truncate text-body-color'>
                                    {news.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Spinner>
        </div>
    );
    //#endregion
};

export default LastNewsCard;
