import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { setPageTitle } from '../../ProjectFeatures/common/headerSlice'
import { setPageTitle } from '../../../ProjectFeatures/common/headerSlice';
import Billing from '../../../ProjectFeatures/settings/billing';

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Bills"}))
      }, [])


    return(
        <Billing />
    )
}

export default InternalPage