import React from 'react';

const Spinner = ({ loading, isEmpty, children }) => {
    if (loading) {
        return (
            <div className='flex items-center justify-center w-full h-96'>
                <div
                    className='inline-block w-8 h-8 bg-primary rounded-full opacity-0 spinner-grow text-base-green'
                    role='status'
                >
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>
        );
    }

    if (isEmpty) {
        return (
            <div className='flex items-center justify-center w-full min-h-screen'>
                <div
                    className='inline-block w-8 h-8 bg-current rounded-full opacity-0 spinner-grow text-base-green'
                    role='status'
                >
                    <span className='visually-hidden'>Empty</span>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default Spinner;
