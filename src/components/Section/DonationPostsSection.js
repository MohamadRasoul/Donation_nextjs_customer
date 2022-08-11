import { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import useSWR from 'swr';
import DonationPostCard from '@/components/Cards/DonationPostCard';

const DonationPostsSection = () => {
    
    return (
        <>
            <section className='pt-20 pb-10 lg:pt-[120px] lg:pb-20'>
                {/* <SelectPicker data={data} style={{ width: 224 }} /> */}
                <div className='container'>
                    <div className='flex flex-wrap -mx-4'>
                        {data.map((donationPost) => (
                            <DonationPostCard
                                donationPost={donationPost}
                            ></DonationPostCard>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DonationPostsSection;
