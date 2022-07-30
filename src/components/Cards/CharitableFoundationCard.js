import Link from 'next/Link';

const CharitableFoundationCard = ({ charitableFoundation }) => {
    return (
        <div className='wow fadeInUp group' data-wow-delay='.1s'>
            <div
                key={charitableFoundation.id}
                className='z-0 h-64 shadow-xl card bg-base-100 image-full'
            >
                <figure>
                    <img
                        src={charitableFoundation.cover}
                        alt='charitableFoundations'
                    />
                </figure>
                <div className='card-body'>
                    <div className='flex'>
                        <div className='mr-5 avatar'>
                            <div className='w-16 h-16 rounded-full'>
                                <img
                                    src={charitableFoundation.image}
                                    alt='charitableFoundations'
                                />
                            </div>
                        </div>
                        <h2 className='card-title'>
                            {charitableFoundation.name}
                        </h2>
                    </div>
                    <p className='overflow-hidden leading-relaxed max-h-20 overflow-ellipsis'>
                        {charitableFoundation.description}
                    </p>
                    <div className='justify-end card-actions'>
                        <Link
                            href={`/charitableFoundations/${charitableFoundation.id}`}
                        >
                            <a className='btn btn-primary hover:text-gray-50'>Show More ...</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharitableFoundationCard;
