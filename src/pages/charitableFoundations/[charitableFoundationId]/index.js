import User from '@/layouts/User';

// Components for page
import Spinner from '@/components/UI/Spinner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import BranchFilter from '@/components/Filters/BranchFilter';
import PostTypeFilter from '@/components/Filters/PostTypeFilter';
import { Divider } from 'rsuite';
import DonationPostCard2 from '@/components/Cards/DonationPostCard2';
import SupportProgramsCard from '@/components/Cards/SupportProgramsCard';
import AboutUsCard from '@/components/Cards/AboutUsCard';
import LastNewsCard from '@/components/Cards/LastNewsCard';

const CharitableFoundation = () => {
    //#region State   ####################################
    const [charitableFoundation, setCharitableFoundation] = useState({});
    const [loading, setLoading] = useState(true);
    const [donationPosts, setDonationPosts] = useState([]);

    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedPostType, setSelectedPostType] = useState('');
    //#endregion

    //#region Hook   ####################################
    const router = useRouter();
    const { charitableFoundationId } = router.query;

    const { data: donationPostsData, donationPostsError } = useSWR(
        `/admin/donationPost/charitablefoundation/${charitableFoundationId}/index?filter[post_type_id]=${selectedPostType}&filter[branch_id]=${selectedBranch}`
    );
    const { data: charitableFoundationData, charitableFoundationError } =
        useSWR(`admin/charitablefoundation/${charitableFoundationId}/show`);

    useEffect(() => {
        setLoading(true);

        if (charitableFoundationData) {
            setCharitableFoundation(
                charitableFoundationData.data.charitablefoundation
            );
        }

        if (donationPostsData) {
            setDonationPosts(donationPostsData.data.donationPosts);
            setLoading(false);
        }
    }, [charitableFoundationData, donationPostsData]);
    //#endregion

    //#region Function   ####################################

    //#endregion

    //#region Jsx   ####################################
    return (
        <>
            {/* <!-- ====== Banner Section Start --> */}
            <div className='relative z-10 w-full h-96'>
                <img
                    className='object-cover object-center w-full overflow-hidden h-96'
                    src={charitableFoundation.cover}
                />
                <div className='absolute top-0 left-0 flex items-end w-full h-full bg-gradient-to-t from-dark-700 to-transparent'></div>
            </div>

            <div className='container'>
                <div className='flex flex-col flex-wrap items-center lg:flex-row -mt-36'>
                    <div className='mr-5 avatar'>
                        <div className='z-50 w-56 h-56 rounded-full shadow-xl'>
                            <img
                                src={charitableFoundation.image}
                            />
                        </div>
                    </div>
                    <h2 className='z-50 py-10 text-4xl font-semibold text-gray-500 lg:text-gray-50'>
                        {charitableFoundation.name}
                    </h2>
                </div>
            </div>

            {/* <!-- ====== Banner Section End --> */}

            {/* <!-- ====== Show CharitableFoundation Section Start --> */}
            <div className='relative -mt-46'>
                <section className='pt-20 pb-10 lg:pt-[120px] lg:pb-20'>
                    <div className='container'>
                        <div className='flex flex-wrap justify-center -mx-4'>
                            <div className='w-full'>
                                <div className='flex flex-wrap -mx-4'>
                                    <div className='w-full px-6 lg:w-8/12'>
                                        <div>
                                            {/* <!-- ====== Filter Section Start --> */}
                                            <div className='flex '>
                                                
                                                <BranchFilter
                                                    setSelectedBranch={
                                                        setSelectedBranch
                                                    }
                                                />

                                                <PostTypeFilter
                                                    setSelectedPostType={
                                                        setSelectedPostType
                                                    }
                                                />
                                            </div>

                                            <Divider />
                                            
                                            {/* <!-- ====== Filter Section End --> */}

                                            <div className='flex flex-wrap -mx-4'>
                                                <Spinner
                                                    loading={loading}
                                                    isEmpty={
                                                        !donationPosts.length
                                                    }
                                                >
                                                    {donationPosts.map(
                                                        (donationPost) => (
                                                            <DonationPostCard2
                                                                key={
                                                                    donationPost.id
                                                                }
                                                                donationPost={
                                                                    donationPost
                                                                }
                                                            ></DonationPostCard2>
                                                        )
                                                    )}
                                                </Spinner>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-full px-4 lg:w-4/12'>
                                        <div>
                                            <AboutUsCard
                                                charitableFoundation={
                                                    charitableFoundation
                                                }
                                            />

                                            <SupportProgramsCard
                                                selectedBranch={selectedBranch}
                                            />

                                            <LastNewsCard
                                                selectedBranch={selectedBranch}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- ====== Show CharitableFoundation Section End --> */}
        </>
    );
    //#endregion
};

export default CharitableFoundation;

CharitableFoundation.layout = User;
