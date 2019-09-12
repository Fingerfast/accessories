import React, {useState} from 'react';
import styled from 'styled-components'
import AccessoriesSelector from './containers/AccessoriesSelector'
import accessoriesMockData from './mocks/accessoriesList'

const AppWrapper = styled.div`
  display: flex;
  background: gray;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-wrap: wrap;
  padding: 0 10px;
  transition: 0.1;
`;

const ContentWrapper = styled.div`
  border: 1px solid #BCB5B9;
  border-radius: 5px;
  padding: 20px;
  background: #F2F2F2;
  width: 640px;
`;

function App() {

    //TODO: connect isLoading to relevant props and delete timeout
    const [isLoading, stopLoading] = useState(true);
    setTimeout(function(){ stopLoading(false); }, 1000); // Imitation of waiting for data

  return (
    <AppWrapper>
        <ContentWrapper>
            <AccessoriesSelector accessories={accessoriesMockData} isLoading={isLoading}/>
        </ContentWrapper>
    </AppWrapper>
  )
}

export default App;
