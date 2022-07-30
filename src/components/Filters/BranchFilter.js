import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SelectPicker } from 'rsuite';
import useSWR from 'swr';

const BranchFilter = ({ setSelectedBranch }) => {
    const [branches, setBranches] = useState([]);

    //#region Hook   ####################################
    const router = useRouter();
    const { charitableFoundationId } = router.query;

    const { data: branchesData, branchesError } = useSWR(
        `/admin/branch/charitablefoundation/${charitableFoundationId}/index`
    );

    useEffect(() => {
        if (branchesData) {
            setBranches(branchesData.data.branchs);
        }
    }, [branchesData]);
    //#endregion

    //#region Function   ####################################
    //#endregion

    return (
        <SelectPicker
            className='mx-2'
            data={branches}
            labelKey='city'
            valueKey='id'
            placeholder='all branch'
            label='Filter'
            style={{ width: 224 }}
            onSelect={(value) => setSelectedBranch(value)}
            onClean={() => setSelectedBranch('')}
        />
    );
};

export default BranchFilter;
