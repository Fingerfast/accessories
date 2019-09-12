import React from 'react';
import styled from 'styled-components'
import * as PropTypes from 'prop-types';

const ThumbnailContent = styled.div`
    background: #fff;
    padding: 1em;
    width: 100%;
    border: ${props => props.active && !props.isLoading ? '3px solid #0080FF; ' : '3px solid #E0E0E0'};
    border-radius: 5px;
    margin: 5px 20px 0 0;
    position: relative;
    ::before {
        content: '';
        display: ${props => props.active && !props.isLoading ? 'block; ' : 'none'};
        position:absolute;
        bottom: 0;
        left: 50%;
        margin-left: -15px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 15px 20px 15px;
        border-color: transparent transparent #0080FF transparent;
    }
    &:last-child {
        margin-right: 0px;
    }
`;

const ThumbnailImage = styled.img`
  width: 100%;
`;

const ThumbnailLoader = () => <ThumbnailImage src={'/spinner.svg'} />;

function AccessoryThumbnail({id, image, onClick, active, isLoading}) {
    return (
        <ThumbnailContent active={active} isLoading={isLoading} onClick={onClick(id)}>
            {isLoading ? <ThumbnailLoader /> : <ThumbnailImage src={image} />}
        </ThumbnailContent>
    )
}

AccessoryThumbnail.propTypes = {
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    active: PropTypes.bool,
    isLoading: PropTypes.bool
};

export default AccessoryThumbnail;
