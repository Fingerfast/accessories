import React, {useState, useCallback} from 'react';
import styled from 'styled-components'
import * as PropTypes from 'prop-types';
import AccessoryThumbnail from '../components/AccessoryThumbnail/AccessoryThumbnail'
import AccessoryDetail from '../components/AccessoryDetail/AccessoryDetail'

const AccessoriesRoot = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
  padding: 20px;
`;

const ThumbnailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
`;

const ContentWrapper = styled.div`
  border: 1px solid #BCB5B9;
  border-radius: 5px;
  background: #F2F2F2;
  width: 100%;
`;

function AccessoriesSelector({accessories, isLoading, addToBasketAction}) {
    const firstItem = accessories.length > 0 ? accessories[0] : null;
    const [activeAccessory, setActiveAccessory] = useState(firstItem);

    const handleChangeAccessory = useCallback((id) => () => {
        setActiveAccessory(accessories.find(item => item.id === id))
    }, [accessories]);

    const amount = 5; // SHOW ONLY 5 ACCESSORIES THUMBNAILS
    return (
        <ContentWrapper>
            <AccessoriesRoot>
                <ThumbnailsWrapper>
                    {accessories.slice(0, amount).map((item) => (
                        <AccessoryThumbnail
                            key={item.id}
                            id={item.id}
                            image={item.imageUri}
                            active={item.id === activeAccessory.id}
                            onClick={handleChangeAccessory}
                            isLoading={isLoading}
                        />))}
                </ThumbnailsWrapper>
                <AccessoryDetail
                    image={activeAccessory.imageUri}
                    name={activeAccessory.name}
                    price={activeAccessory.price}
                    isLoading={isLoading}
                    onAddToBasket={addToBasketAction}
                />
            </AccessoriesRoot>
        </ContentWrapper>)
}

AccessoriesSelector.propTypes = {
    accessories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imageUri: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    })).isRequired,
    isLoading: PropTypes.bool.isRequired,
    addToBasketAction: PropTypes.func.isRequired,
};

export default AccessoriesSelector;
