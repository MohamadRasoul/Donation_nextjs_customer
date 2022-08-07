import React from 'react';
import Link from 'next/link';

const SupportProgramCard = ({ supportProgram }) => {
    return (
        <div
            key={supportProgram.id}
            className='w-full m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 md:w-80'
        >
            <a href='#' className='block w-full h-full'>
                <img
                    alt='blog photo'
                    src={supportProgram.image}
                    className=' w-full object-cover aspect-[5/3]'
                />
                <div className='w-full p-4 bg-white '>
                    <a
                        href='#'
                        className='px-2 py-1 text-white rounded-lg opacity-60 bg-primary'
                    >
                        {supportProgram.support_program_type}
                    </a>
                    <p className='mt-6 mb-2 text-xl font-medium text-gray-800 '>
                        {supportProgram.title}
                    </p>
                    <p className='h-16 font-light text-gray-400 truncate text-md'>
                        {supportProgram.description}
                    </p>
                    <div className='flex items-center justify-between mt-4'>
                        <div className='flex items-center'>
                            <a href='#' className='relative block'>
                                <img
                                    alt='profil'
                                    src={supportProgram.image_instructor}
                                    className='object-cover w-10 h-10 mx-auto rounded-full '
                                />
                            </a>
                            <div className='flex justify-center ml-4 text-md'>
                                <p className='text-gray-800 '>Jean Jacques</p>
                            </div>
                        </div>
                        <p className='font-medium text-gray-400 text-md'>
                            {supportProgram.begin_date}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default SupportProgramCard;
