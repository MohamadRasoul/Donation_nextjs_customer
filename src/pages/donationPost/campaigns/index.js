import DonationPostCard from '@/components/Cards/DonationPostCard';
import CharitablefoundationFilter from '@/components/Filters/CharitablefoundationFilter';
import CityFilter from '@/components/Filters/CityFilter';
import Spinner from '@/components/UI/Spinner';
import User from '@/layouts/User';
import { useEffect, useState } from 'react';
import { Divider } from 'rsuite';
import useSWR from 'swr';

const Campaigns = () => {
    //#region State   ####################################
    const [donationPosts, setDonationPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedCharitablefoundation, setSelectedCharitablefoundation] =
        useState(null);
    const [selectedCity, setSelectedCity] = useState('');

    //#endregion

    //#region Hook   ####################################
    const { data: donationPostsData, donationPostsError } = useSWR(
        selectedCharitablefoundation
            ? `/admin/donationPost/charitablefoundation/${selectedCharitablefoundation}/index?filter[post_type_id]=3&filter[city_id]=${selectedCity}`
            : `/admin/donationPost/index?filter[post_type_id]=3&filter[city_id]=${selectedCity}`
    );

    useEffect(() => {
        setLoading(true);

        if (donationPostsData) {
            setDonationPosts(donationPostsData.data.donationPosts);
            setLoading(false);
        }
    }, [donationPostsData]);
    //#endregion

    //#region Function   ####################################
    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            {/* <!-- ====== Banner Section Start --> */}
            <div className='relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]'>
                <div className='container'>
                    <div className='flex flex-wrap items-center -mx-4'>
                        <div className='w-full px-4'>
                            <div className='text-center'>
                                <h1 className='text-4xl font-semibold text-white'>
                                    Campaigns
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
                            setSelectedCharitablefoundation={
                                setSelectedCharitablefoundation
                            }
                            selectedCharitablefoundation={
                                selectedCharitablefoundation
                            }
                        />

                        <CityFilter setSelectedCity={setSelectedCity} />
                    </div>
                    <Divider />
                    <div className='flex flex-wrap -mx-4'>
                        <Spinner
                            loading={loading}
                            isEmpty={!donationPosts.length}
                        >
                            {donationPosts.map((donationPost) => (
                                <DonationPostCard
                                    key={donationPost.id}
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
    //#endregion
};

export default Campaigns;

Campaigns.layout = User;
