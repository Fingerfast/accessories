import React, {Fragment, useCallback} from 'react';
import styled from 'styled-components'
import * as PropTypes from 'prop-types';
import ContentLoader from "react-content-loader";

const DetailWrapper = styled.div`
  background: white;
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 100%;
  div {
    padding: 10px;
  }
`;

const DetailInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const ImageWrapper = styled.div`
  flex: 1 0 150px;
`;

const DetailDescription = styled.div`
  flex: 0 1 200px;
  display: flex;
  text-align: left;
  flex-direction: column;
`;

const ActionWrapper = styled.div`
  flex: 1 1 100%;
  display: flex
  padding:0 20px;
`;

const AddToBasket = styled.button`
  flex: 0 1 100%;
  margin-top: 20px;
  height: 60px;
  background: white;
  border: ${props => props.isLoading ? '3px solid #C0C0C0' : '3px solid #00CC00'};
  border-radius: 5px;
  color: ${props => props.isLoading ? '#C0C0C0' : '#00CC00'};
  font-size: 18px; 
`;

const ImageDetail = styled.img`
  width: 100%;
`;

const TitleWrap = styled.div`
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  flex: 0 1 50%;
`;

const PriceWrap = styled.div`
  display: flex;
  justify-content: center;
  flex: 0 1 50%;
  align-items: center;
  p {
  }
`;

const Price = styled.p`
  height:22px;
  font-weight: 900;
  font-size: 22px;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  border-top: 1px solid #C0C0C0;
  border-bottom: 1px solid #C0C0C0;
`;

const Title = styled.span`
  height:22px;
`;


function AccessoryDetail({name, price, image, isLoading}) {

    //TODO: This callback should fire addToBasket(payload{$name,$price}) => redux/API
    const handleBasket = useCallback(() => {
        alert(`Your order: \n\nProduct Name: ${name}\n\nProduct price: ${price}`);
    }, []);

    let imageToRender = (
        <ContentLoader
            height={150}
            width={150}
            speed={1}
            primaryColor={'#c0c0c0'}
            secondaryColor={'#999'}
        >
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="0" ry="0" width="150" height="150" />
        </ContentLoader>
    );
    let descriptionToRender = (
        <ContentLoader
            height={100}
            width={100}
            speed={1}
            primaryColor={'#c0c0c0'}
            secondaryColor={'#999'}
        >
            {/* Only SVG shapes */}
            <rect x="0" y="0" rx="3" ry="3" width="100" height="6" />
            <rect x="0" y="10" rx="3" ry="3" width="100" height="6" />
            <rect x="0" y="20" rx="3" ry="3" width="100" height="6" />
            <rect x="0" y="30" rx="3" ry="3" width="100" height="6" />
            <rect x="0" y="40" rx="3" ry="3" width="100" height="6" />
        </ContentLoader>
)

    if (!isLoading) {
        imageToRender = (
            <ImageDetail src={image}/>
        );
        descriptionToRender = (
            <Fragment>
                <TitleWrap>
                    <Title>{name}</Title>
                </TitleWrap>
                <PriceWrap>
                    <Price>{price}</Price>
                </PriceWrap>
            </Fragment>
        );
    }

    return (
        <DetailWrapper>
            <DetailInfo>
                <ImageWrapper>
                    {imageToRender}
                </ImageWrapper>
                <DetailDescription isLoading={isLoading}>
                    {descriptionToRender}
                </DetailDescription>
            </DetailInfo>
            <ActionWrapper>
                <AddToBasket disabled={isLoading} onClick={handleBasket} isLoading={isLoading}><i className="fas fa-cart-plus"/>Add to basket</AddToBasket>
            </ActionWrapper>
        </DetailWrapper>
    )
}

AccessoryDetail.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isLoading: PropTypes.bool
};

export default AccessoryDetail;
