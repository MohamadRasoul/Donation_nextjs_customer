import DonationPostCard from '@/components/Cards/DonationPostCard';
import Spinner from '@/components/UI/Spinner';
import User from '@/layouts/User';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

const Cases = () => {
    const [donationPosts, setDonationPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data: donationPostsData, error } = useSWR(
        '/admin/donationPost/index?filter[post_type_id]=1'
    );

    useEffect(() => {
        if (donationPostsData) {
            setDonationPosts(donationPostsData.data.donationPosts);
            setLoading(false);
        }
    }, [donationPostsData]);
    return (
        <>
            {/* <!-- ====== Banner Section Start --> */}
            <div className='relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]'>
                <div className='container'>
                    <div className='flex flex-wrap items-center -mx-4'>
                        <div className='w-full px-4'>
                            <div className='text-center'>
                                <h1 className='text-4xl font-semibold text-white'>
                                    Cases
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== Banner Section End --> */}

            {/* <!-- ====== Blog Section Start --> */}
            <section className='pt-20 pb-10 lg:pt-[120px] lg:pb-20'>
                <div className='container'>
                    <div className='-mx-4 flex flex-wrap'>
                        <Spinner
                            loading={loading}
                            isEmpty={!donationPosts.length}
                        >
                            {donationPosts.map((donationPost) => (
                                <DonationPostCard
                                    donationPost={donationPost}
                                ></DonationPostCard>
                            ))}
                        </Spinner>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Blog Section End --> */}
        </>
    );
};

export default Cases;

Cases.layout = User;
