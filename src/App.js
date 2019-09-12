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
  width: 50%;
  flex-direction: column;
`;

function App() {

    //TODO: connect isLoading to relevant props and delete timeout
    const [isLoading, stopLoading] = useState(true);
    setTimeout(() => stopLoading(false), 1500); // Imitation of waiting for data

    return (
        <AppWrapper>
            <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading} />
            {/*<ContentWrapper>*/}
            {/*    <ContentColumnWrapper>*/}
            {/*        <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading} />*/}
            {/*    </ContentColumnWrapper>*/}
            {/*    <ContentColumnWrapper>*/}
            {/*        <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading} />*/}
            {/*    </ContentColumnWrapper>*/}
            {/*</ContentWrapper>*/}
        </AppWrapper>
    );
}

export default App;