import { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import useSWR from 'swr';

const PostTypeFilter = ({ setSelectedPostType }) => {
    //#region Hook   ####################################
    const [postTypes, setPostTypes] = useState([]);

    const { data: postTypesData, postTypesError } = useSWR('/user/postType/index');

    useEffect(() => {
        if (postTypesData) {
            setPostTypes(postTypesData.data.postTypes);
        }
    }, [postTypesData]);
    //#endregion

    //#region Function   ####################################
    //#endregion

    return (
        <SelectPicker
            className='mx-2'
            data={postTypes}
            labelKey='title'
            valueKey='id'
            placeholder='all postType'
            label='Filter'
            style={{ width: 224 }}
            onSelect={(value) => setSelectedPostType(value)}
            onClean={() => setSelectedPostType('')}
        />
    );
};

export default PostTypeFilter;
