import React, { useEffect } from 'react';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import { useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateSum, removeProduct, toggleDrawer } from './redux/slices/basketSlice';

const App = () => {

  const { pathname } = useLocation();
  const { products, drawer, totalAmount } = useSelector(store => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(calculateSum());
  }, []);





  return (
    <div>
      <Header />
      <PageContainer>
        <RouterConfig />
        <Loading />
        <Drawer onClose={() => dispatch(toggleDrawer())} anchor='right' open={drawer}>
          {
            products && products.map((product, index) => {
              return (
                <div className='flex items-center justify-between w-full p-4' key={index}>
                  <div>
                    <img src={product.image} width={70} height={70} />
                  </div>
                  <div className='w-64 mx-6'>
                    <p className='font-semibold'>{product.title} <span style={{ color: '#38a169', marginLeft: '5px' }}>( {product.priceCount} )</span></p>
                    <p className='font-extrabold text-xl mt-2'>{product.price}$</p>
                  </div>
                  <button onClick={() => dispatch(removeProduct(product.id))} className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-2 border-b-4 border-red-700 hover:border-red-500 rounded">
                    Delete
                  </button>
                </div>
              );
            })
          }
          <div className='text-center my-5 text-2xl'>Sum:{totalAmount}</div>
        </Drawer>
      </PageContainer>
    </div>
  );
};

export default App;