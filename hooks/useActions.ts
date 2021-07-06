import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionsCreators from '../bll/actions-creators';

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actionsCreators, dispatch), [dispatch]);
}
