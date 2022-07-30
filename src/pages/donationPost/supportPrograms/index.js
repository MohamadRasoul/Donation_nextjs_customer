import DonationPostCard from '@/components/Cards/DonationPostCard';
import CharitablefoundationFilter from '@/components/Filters/CharitablefoundationFilter';
import CityFilter from '@/components/Filters/CityFilter';
import Spinner from '@/components/UI/Spinner';
import User from '@/layouts/User';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Divider, SelectPicker } from 'rsuite';
import useSWR from 'swr';

const SupportPrograms = () => {
    //#region State   ####################################
    const [supportPrograms, setSupportPrograms] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedCharitablefoundation, setSelectedCharitablefoundation] =
        useState(null);
    const [selectedCity, setSelectedCity] = useState('');

    //#endregion

    //#region Hook   ####################################
    

    const { data: supportProgramsData, supportProgramsError } = useSWR(
        selectedCharitablefoundation
            ? `/admin/supportProgram/charitablefoundation/${selectedCharitablefoundation}/index?filter[city_id]=${selectedCity}`
            : `/admin/supportProgram/index?filter[city_id]=${selectedCity}`
    );

    useEffect(() => {
        setLoading(true);

        if (supportProgramsData) {
            setSupportPrograms(supportProgramsData.data.supportPrograms);
            setLoading(false);
        }
    }, [supportProgramsData]);
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
                                    SupportPrograms
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
                        />

                        <CityFilter setSelectedCity={setSelectedCity} />
                    </div>
                    <Divider />
                    <div className='flex flex-wrap -mx-4'>
                        <Spinner
                            loading={loading}
                            isEmpty={!supportPrograms.length}
                        >
                            {supportPrograms.map((supportProgram) => (
                                <DonationPostCard
                                    key={supportProgram.id}
                                    supportProgram={supportProgram}
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

export default SupportPrograms;

SupportPrograms.layout = User;
