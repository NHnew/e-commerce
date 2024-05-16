import React, { useEffect } from 'react';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import { useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux';

const App = () => {

  const { pathname } = useLocation();
  const { products } = useSelector(store => store.product);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div>
      <Header />
      <PageContainer>
        <RouterConfig />
        <Loading />
        <Drawer anchor='right' open={true}>
          {
            products && products.map(product => {
              return (
                <div className='flex items-center justify-between w-96 p-4' key={product.id}>
                  <div>
                    <img src={product.image} width={70} height={70} />
                  </div>
                  <div className='w-64'>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                  </div>
                </div>
              );
            })
          }
        </Drawer>
      </PageContainer>
    </div>
  );
};

export default App;