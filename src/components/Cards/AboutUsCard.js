import Link from 'next/Link';

const AboutUsCard = ({ charitableFoundation }) => {
    return (
        <div
            className='relative px-10 py-8 mb-12 overflow-hidden text-center rounded wow fadeInUp bg-primary lg:px-8'
            data-wow-delay='.1s
'
        >
            <h3 className='mb-5 text-2xl font-semibold text-white'>
                About Us.
            </h3>
            <div className='text-sm font-medium text-white'>
                <p>{charitableFoundation.description}</p>

                <a href={charitableFoundation.website} target='_blank'>
                    <div className='mt-5 mb-3 text-sm text-blueGray-100 hover:text-gray-200'>
                        <i className='mr-2 text-gray-100 fa-solid fa-globe'></i>{' '}
                        go to webstie
                    </div>
                </a>
                <div className='mt-2 mb-3 text-sm text-blueGray-100'>
                    <i className='mr-2 text-gray-100 fa-solid fa-square-phone text-blueGray-400'></i>
                    {charitableFoundation.phone_number}
                </div>
                <div className='mt-2 mb-3 text-sm text-blueGray-100'>
                    <i className='mr-2 text-gray-100 fa-solid fa-envelope text-blueGray-400'></i>
                    {charitableFoundation.email}
                </div>
            </div>
            <div>
                <span className='absolute top-0 right-0'>
                    <svg
                        width='46'
                        height='46'
                        viewBox='0 0 46 46'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <circle
                            cx='1.39737'
                            cy='44.6026'
                            r='1.39737'
                            transform='rotate(-90 1.39737 44.6026)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='1.39737'
                            cy='7.9913'
                            r='1.39737'
                            transform='rotate(-90 1.39737 7.9913)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='13.6943'
                            cy='44.6026'
                            r='1.39737'
                            transform='rotate(-90 13.6943 44.6026)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='13.6943'
                            cy='7.9913'
                            r='1.39737'
                            transform='rotate(-90 13.6943 7.9913)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='25.9911'
                            cy='44.6026'
                            r='1.39737'
                            transform='rotate(-90 25.9911 44.6026)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='25.9911'
                            cy='7.9913'
                            r='1.39737'
                            transform='rotate(-90 25.9911 7.9913)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='38.288'
                            cy='44.6026'
                            r='1.39737'
                            transform='rotate(-90 38.288 44.6026)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='38.288'
                            cy='7.9913'
                            r='1.39737'
                            transform='rotate(-90 38.288 7.9913)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='1.39737'
                            cy='32.3058'
                            r='1.39737'
                            transform='rotate(-90 1.39737 32.3058)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='13.6943'
                            cy='32.3058'
                            r='1.39737'
                            transform='rotate(-90 13.6943 32.3058)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='25.9911'
                            cy='32.3058'
                            r='1.39737'
                            transform='rotate(-90 25.9911 32.3058)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='38.288'
                            cy='32.3058'
                            r='1.39737'
                            transform='rotate(-90 38.288 32.3058)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='1.39737'
                            cy='20.0086'
                            r='1.39737'
                            transform='rotate(-90 1.39737 20.0086)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='13.6943'
                            cy='20.0086'
                            r='1.39737'
                            transform='rotate(-90 13.6943 20.0086)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='25.9911'
                            cy='20.0086'
                            r='1.39737'
                            transform='rotate(-90 25.9911 20.0086)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='38.288'
                            cy='20.0086'
                            r='1.39737'
                            transform='rotate(-90 38.288 20.0086)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                    </svg>
                </span>
                <span className='absolute bottom-0 left-0'>
                    <svg
                        width='46'
                        height='46'
                        viewBox='0 0 46 46'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <circle
                            cx='1.39737'
                            cy='44.6026'
                            r='1.39737'
                            transform='rotate(-90 1.39737 44.6026)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='1.39737'
                            cy='7.9913'
                            r='1.39737'
                            transform='rotate(-90 1.39737 7.9913)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='13.6943'
                            cy='44.6026'
                            r='1.39737'
                            transform='rotate(-90 13.6943 44.6026)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='13.6943'
                            cy='7.9913'
                            r='1.39737'
                            transform='rotate(-90 13.6943 7.9913)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='25.9911'
                            cy='44.6026'
                            r='1.39737'
                            transform='rotate(-90 25.9911 44.6026)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='25.9911'
                            cy='7.9913'
                            r='1.39737'
                            transform='rotate(-90 25.9911 7.9913)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='38.288'
                            cy='44.6026'
                            r='1.39737'
                            transform='rotate(-90 38.288 44.6026)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='38.288'
                            cy='7.9913'
                            r='1.39737'
                            transform='rotate(-90 38.288 7.9913)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='1.39737'
                            cy='32.3058'
                            r='1.39737'
                            transform='rotate(-90 1.39737 32.3058)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='13.6943'
                            cy='32.3058'
                            r='1.39737'
                            transform='rotate(-90 13.6943 32.3058)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='25.9911'
                            cy='32.3058'
                            r='1.39737'
                            transform='rotate(-90 25.9911 32.3058)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='38.288'
                            cy='32.3058'
                            r='1.39737'
                            transform='rotate(-90 38.288 32.3058)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='1.39737'
                            cy='20.0086'
                            r='1.39737'
                            transform='rotate(-90 1.39737 20.0086)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='13.6943'
                            cy='20.0086'
                            r='1.39737'
                            transform='rotate(-90 13.6943 20.0086)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='25.9911'
                            cy='20.0086'
                            r='1.39737'
                            transform='rotate(-90 25.9911 20.0086)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                        <circle
                            cx='38.288'
                            cy='20.0086'
                            r='1.39737'
                            transform='rotate(-90 38.288 20.0086)'
                            fill='white'
                            fill-opacity='0.44'
                        />
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default AboutUsCard;
