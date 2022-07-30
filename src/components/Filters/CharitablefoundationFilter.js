import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import useSWR from 'swr';

const CharitablefoundationFilter = ({ setSelectedCharitablefoundation }) => {
    //#region Hook   ####################################
    const [charitablefoundations, setCharitablefoundations] = useState([]);

    const { data: charitablefoundationsData, charitablefoundationsError } =
        useSWR('/admin/charitablefoundation/index');

    const router = useRouter();
    const { charitableFoundationId } = router.query;
    console.log(charitableFoundationId);
    useEffect(() => {
        if (charitablefoundationsData) {
            setCharitablefoundations(
                charitablefoundationsData.data.charitablefoundations
            );
        }
    }, [charitablefoundationsData, charitableFoundationId]);
    //#endregion

    //#region Function   ####################################
    //#endregion
    return (
        <SelectPicker
            className='mx-2'
            data={charitablefoundations}
            labelKey='name'
            valueKey='id'
            placeholder='all charitablefoundation'
            label='Filter'
            style={{ width: 224 }}
            onSelect={(value) => setSelectedCharitablefoundation(value)}
            onClean={() => setSelectedCharitablefoundation(null)}
        />
    );
};

export default CharitablefoundationFilter;
