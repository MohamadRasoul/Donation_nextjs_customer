import { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import useSWR from 'swr';

const CharitablefoundationFilter = ({ setSelectedCharitablefoundation }) => {
    //#region Hook   ####################################
    const [charitablefoundations, setCharitablefoundations] = useState([]);

    const { data: charitablefoundationsData, charitablefoundationsError } =
        useSWR('/admin/charitablefoundation/index');

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
        <SelectPicker
            className='mx-2'
            data={charitablefoundations}
            labelKey='name'
            valueKey='id'
            placeholder='charitablefoundation'
            label='Filter'
            style={{ width: 224 }}
            onSelect={(value) => setSelectedCharitablefoundation(value)}
            onClean={() => setSelectedCharitablefoundation(null)}
        />
    );
};

export default CharitablefoundationFilter;
