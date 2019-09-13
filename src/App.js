import React, { useState } from 'react';
import styled from 'styled-components';
import AccessoriesSelector from './containers/AccessoriesSelector';
import accessoriesMockData from './mocks/accessoriesList';


const AppWrapper = styled.div`
  display: flex;
  background: gray;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;
`;

const ContentWrapper = styled.div`
  border: 1px solid #BCB5B9;
  width: 100%
  display: flex;
  flex-flow: row nowrap;
`;
const ContentColumnWrapper = styled.div`
  width: ${props => props.col === 3 ? '33.33%' : '50%'};
  flex-direction: column;
`;

const handleBasket = (name, price) => {
    alert(`Your order: \n\nProduct Name: ${name}\n\nProduct price: ${price}`);
};

function App() {
    const [isLoading, stopLoading] = useState(true);

    //TODO: connect isLoading to relevant props and delete timeout
    setTimeout(() => stopLoading(false), 1500); // Imitation of waiting for data

    return (
        <AppWrapper>
            <ContentWrapper>
                <ContentColumnWrapper col={3}>
                    <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading} addToBasketAction={handleBasket}/>
                </ContentColumnWrapper>
                <ContentColumnWrapper col={3}>
                    <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading} addToBasketAction={handleBasket}/>
                </ContentColumnWrapper>
                <ContentColumnWrapper col={3}>
                    <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading} addToBasketAction={handleBasket}/>
                </ContentColumnWrapper>
            </ContentWrapper>
            <ContentWrapper>
                <ContentColumnWrapper>
                    <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading} addToBasketAction={handleBasket}/>
                </ContentColumnWrapper>
                <ContentColumnWrapper>
                    <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading} addToBasketAction={handleBasket}/>
                </ContentColumnWrapper>
            </ContentWrapper>
            <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading} addToBasketAction={handleBasket}/>
        </AppWrapper>
    );
}

export default App;