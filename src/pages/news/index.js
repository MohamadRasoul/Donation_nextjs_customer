import NewsCard from '@/components/Cards/NewsCard';
import CharitablefoundationFilter from '@/components/Filters/CharitablefoundationFilter';
import CityFilter from '@/components/Filters/CityFilter';
import Spinner from '@/components/UI/Spinner';
import User from '@/layouts/User';
import { useEffect, useState } from 'react';
import { Divider } from 'rsuite';
import useSWR from 'swr';

const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCharitablefoundation, setSelectedCharitablefoundation] = useState();

    const { data: newsData, newsError } =
        useSWR(
            selectedCharitablefoundation
                ? `/admin/news/charitablefoundation/${selectedCharitablefoundation}/index`
                : '/admin/news/index');

    useEffect(() => {
        setLoading(true);
        if (newsData) {
            setNews(
                newsData.data.news
            );
            console.log(newsData.data.news)
            setLoading(false)
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

            {/* <!-- ====== Blog Section Start --> */}
            <section className='pt-16 pb-10 lg:pt-[80px] lg:pb-20'>
                <div className='container'>
                    <div className='flex justify-center'>
                        <CharitablefoundationFilter
                            selectedCharitablefoundation={
                                selectedCharitablefoundation
                            }
                            setSelectedCharitablefoundation={
                                setSelectedCharitablefoundation
                            }
                        />

                        {/* <CityFilter setSelectedCity={setSelectedCity} /> */}
                    </div>
                    <Divider />
                    <div className='grid w-full grid-cols-1 gap-6 my-10'>
                        <Spinner
                            loading={loading}
                            isEmpty={!news.length}
                        >
                            {news.map((news) => (
                                <NewsCard
                                    key={news.id}
                                    news={news}
                                ></NewsCard>
                            ))}
                        </Spinner>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Blog Section End --> */}
        </>
    );
};

export default News;

News.layout = User;
