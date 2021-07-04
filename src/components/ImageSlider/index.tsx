import React from 'react';

import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage
} from './styles';

interface ISliderProps {
    imagesUrl: string[];
}

export function ImageSlider({ imagesUrl } : ISliderProps) {
    return (
        <Container>
            <ImageIndexes>
                <ImageIndex active={true}/>
                <ImageIndex active={false}/>
                <ImageIndex active={false}/>
                <ImageIndex active={false}/>
            </ImageIndexes>

            <CarImageWrapper>
                <CarImage source={{uri: imagesUrl[0]}}/>
            </CarImageWrapper>

        </Container>
    );
}

