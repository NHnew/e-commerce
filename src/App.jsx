import React from 'react';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';

const App = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <RouterConfig />
        <Loading />
      </PageContainer>
    </div>
  );
};

export default App;