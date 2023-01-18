import { ThreeDots } from  'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderWrapper>
            <ThreeDots/>
        </LoaderWrapper>
    );
};

