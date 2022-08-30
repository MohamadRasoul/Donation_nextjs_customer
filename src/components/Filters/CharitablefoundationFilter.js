import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import useSWR from 'swr';

const CharitablefoundationFilter = ({
    selectedCharitablefoundation,
    setSelectedCharitablefoundation,
}) => {
    //#region Hook   ####################################
    const [charitablefoundations, setCharitablefoundations] = useState([]);

    const { data: charitablefoundationsData, charitablefoundationsError } =
        useSWR('/user/charitablefoundation/index');

    useEffect(() => {
        if (charitablefoundationsData) {
            setCharitablefoundations(
                charitablefoundationsData.data.charitablefoundations
            );
        }
    }, [charitablefoundationsData]);
    //#endregion

    //#region Function   ####################################
    //#endregion
    return (
        <>
            <SelectPicker
                className='mx-2'
                data={charitablefoundations}
                labelKey='name'
                valueKey='id'
                value={parseInt(selectedCharitablefoundation)}
                placeholder='all charitablefoundation'
                label='Filter'
                style={{ width: 224 }}
                onSelect={(value) => setSelectedCharitablefoundation(value)}
                onClean={() => setSelectedCharitablefoundation(null)}
            />
        </>
    );
};

export default CharitablefoundationFilter;
