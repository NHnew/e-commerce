import React, { useEffect } from 'react';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import { useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from './redux/slices/basketSlice';

const App = () => {

  const { pathname } = useLocation();
  const { products, drawer } = useSelector(store => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div>
      <Header />
      <PageContainer>
        <RouterConfig />
        <Loading />
        <Drawer onClose={() => dispatch(toggleDrawer())} anchor='right' open={drawer}>
          {
            products && products.map(product => {
              return (
                <div className='flex items-center justify-between w-96 p-4' key={product.id}>
                  <div>
                    <img src={product.image} width={70} height={70} />
                  </div>
                  <div className='w-64 mx-6'>
                    <p className='font-semibold'>{product.title}</p>
                    <p className='font-extrabold text-xl mt-2'>{product.price}$</p>
                  </div>
                  <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Delete
                  </button>
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