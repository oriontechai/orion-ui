import styled from "styled-components";
import { Fragment } from 'react';

interface ImageBackgroundProps{
    url : string
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
    background-size: cover;
    background-image: ${({ url }) => `url('${url}')`};
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: 0;
`;

export const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.63;
    z-index: 0;
    background-color: #010101;
`;

export const LighterShadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: 0;
    background-color: #010101;
`;

export const DarkImageBackground = (props : ImageBackgroundProps) => {
    return(
        <Fragment>
            <ImageBackground url={`${props.url}`}/>
            <Shadow />
        </Fragment>
    );
}