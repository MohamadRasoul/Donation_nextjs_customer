import User from '@/layouts/User';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data: newsData, newsError } =
        useSWR('/admin/news/index');

    useEffect(() => {
        if (newsData) {
            setNews(
                newsData.data.news
            );
            setLoading(false);
        }
    }, [newsData]);
    return (
        <>
            {/* <!-- ====== Banner Section Start --> */}
            <div className='relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]'>
                <div className='container'>
                    <div className='flex flex-wrap items-center -mx-4'>
                        <div className='w-full px-4'>
                            <div className='text-center'>
                                <h1 className='text-4xl font-semibold text-white'>
                                    News
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== Banner Section End --> */}
        </>
    );
};

export default News;

News.layout = User;
