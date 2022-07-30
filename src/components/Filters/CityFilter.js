import { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import useSWR from 'swr';

const CityFilter = ({ setSelectedCity }) => {
    //#region Hook   ####################################
    const [cities, setCities] = useState([]);

    const { data: citiesData, citiesError } = useSWR('/admin/city/index');

    useEffect(() => {
        if (citiesData) {
            setCities(citiesData.data.cities);
        }
    }, [citiesData]);
    //#endregion

    //#region Function   ####################################
    //#endregion

    return (
        <SelectPicker
            className='mx-2'
            data={cities}
            labelKey='name'
            valueKey='id'
            placeholder='all city'
            label='Filter'
            style={{ width: 224 }}
            onSelect={(value) => setSelectedCity(value)}
            onClean={() => setSelectedCity('')}
        />
    );
};

export default CityFilter;
