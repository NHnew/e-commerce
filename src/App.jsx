import React, { useEffect } from 'react';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import { useLocation } from 'react-router-dom';

const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


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