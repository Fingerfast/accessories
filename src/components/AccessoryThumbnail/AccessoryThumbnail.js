import React from 'react';
import styled from 'styled-components'
import * as PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader'


const SelectorWrapper = styled.div`
  // display: ${props => !props.isLoading ? 'flex' : 'block'};
  display: flex;
  background: white;
  flex: 0 1 100px;
  min-height: 100px;  
  padding: 5px;
  border: ${props => props.active && !props.isLoading ? '3px solid #0080FF; ' : '3px solid #E0E0E0'};
 // justify-content: space-between;
  border-radius: 5px;
  margin: 5px 5px 0 0;
  align-self: center;
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
`;

const SelectorThumbImage = styled.img`
  width: 100%;
`;

function AccessoryThumbnail({id, image, onClick, active, isLoading}) {
    let componentToRender = (
        <ContentLoader
            height={100}
            width={100}
            speed={1}
            primaryColor={'#c0c0c0'}
            secondaryColor={'#999'}
        >
            {/* Only SVG shapes */}
            <circle cx="15" cy="15" r="15" />
        </ContentLoader>
    )
    if(!isLoading) {
        componentToRender = (
            <SelectorThumbImage src={image}/>
        )
    }

    return (
        <SelectorWrapper active={active} isLoading={isLoading} onClick={onClick(id)}>
            {componentToRender}
        </SelectorWrapper>
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
