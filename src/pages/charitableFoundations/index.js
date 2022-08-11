import CharitableFoundationCard from '@/components/Cards/CharitableFoundationCard';
import Spinner from '@/components/UI/Spinner';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import User from '@/layouts/User';

const CharitableFoundations = ({}) => {
    const [charitableFoundations, setCharitablefoundations] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data: charitableFoundationsData, charitableFoundationsError } =
        useSWR('/admin/charitablefoundation/index');

    useEffect(() => {
        if (charitableFoundationsData) {
            setCharitablefoundations(
                charitableFoundationsData.data.charitablefoundations
            );
            setLoading(false);
        }
    }, [charitableFoundationsData]);
    return (
        <>
            {/* <!-- ====== Banner Section Start --> */}
            <div className='relative z-10 overflow-hidden bg-primary pt-[120px] pb-[100px] md:pt-[130px] lg:pt-[160px]'>
                <div className='container'>
                    <div className='flex flex-wrap items-center -mx-4'>
                        <div className='w-full px-4'>
                            <div className='text-center'>
                                <h1 className='text-4xl font-semibold text-white'>
                                    Charitable Foundations
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ====== Banner Section End --> */}

            {/* <!-- ====== Blog Section Start --> */}
            <div className='container'>
                <Spinner
                    loading={loading}
                    isEmpty={!charitableFoundations.length}
                >
                    v<div className='grid w-full grid-cols-1 gap-6 my-10 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1'>
                        {charitableFoundations?.map((charitableFoundation) => (
                            <CharitableFoundationCard
                                charitableFoundation={charitableFoundation}
                            />
                        ))}
                    </div>v
                </Spinner>
            </div>
            {/* <!-- ====== Blog Section End --> */}
        </>
    );
};

export default CharitableFoundations;

CharitableFoundations.layout = User;
