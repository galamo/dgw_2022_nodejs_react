import CircularProgress from '@material-ui/core/CircularProgress';
import { Children } from 'react';

export default function WithLoading(props: { children: React.ReactElement, isLoading: boolean }) {
    return props.isLoading ? <CircularProgress color="secondary" /> : props.children
}

