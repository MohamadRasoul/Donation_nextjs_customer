import moment from 'moment';
import Link from 'next/Link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Spinner from '../UI/Spinner';

const SupportProgramsCard = ({ selectedBranch }) => {
    //#region State   ####################################
    const [supportPrograms, setSupportPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    //#endregion

    //#region Hook   ####################################
    const router = useRouter();
    const { charitableFoundationId } = router.query;

    const { data: supportProgramsData, supportProgramsError } = useSWR(
        `/user/supportProgram/charitablefoundation/${charitableFoundationId}/index?filter[branch_id]=${selectedBranch}`
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
        <div
            className='relative w-full mb-12 rounded-t wow fadeInUp'
            data-wow-delay='.1s'
        >
            <div className='overflow-hidden bg-white shadow-md sm:rounded-md'>
                <div className='w-full px-4'>
                    <h2
                        className='wow fadeInUp py-4 relative pb-5 text-2xl font-semibold text-dark sm:text-[28px]'
                        data-wow-delay='.1s
                        '
                    >
                        Support Program
                    </h2>
                    <span className='mb-10 inline-block h-[2px] w-20 bg-primary'></span>
                </div>
                <ul className='divide-y divide-gray-200'>
                    <Spinner
                        loading={loading}
                        isEmpty={!supportPrograms.length}
                    >
                        {supportPrograms.slice(0, 4).map((supportProgram) => (
                            <li>
                                <a className='block hover:bg-gray-50 '>
                                    <div className='px-4 py-4 sm:px-6'>
                                        <div className='flex items-center justify-between'>
                                            <p className='text-gray-700 text-md md:truncate'>
                                                {supportProgram.title}
                                            </p>
                                            <div className='flex flex-shrink-0 mt-2'>
                                                <p className='inline-flex px-2 text-xs font-semibold leading-5 bg-green-100 rounded-full text-primary'>
                                                    {
                                                        supportProgram.support_program_type
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className='mt-2 sm:flex sm:justify-between'>
                                            <div className='sm:flex'>
                                                <p className='flex items-center font-light text-gray-500 text-md '>
                                                    {moment(
                                                        supportProgram.begin_date
                                                    ).format(
                                                        'dddd, MMMM Do YYYY'
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </Spinner>
                </ul>
                <div className='flex justify-center w-full p-4 mx-auto'>
                    <Link
                        href={`/donationPost/supportPrograms?charitableFoundationId=${charitableFoundationId}`}
                    >
                        <a className='w-1/2 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md hover:text-gray-100 bg-primary hover:opacity-90 focus:ring-primary focus:ring-offset-primary focus:outline-none focus:ring-2 focus:ring-offset-2 '>
                            View all
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
    //#endregion
};

export default SupportProgramsCard;
