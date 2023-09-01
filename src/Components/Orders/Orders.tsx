import { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import cn from 'classnames';
import { OrderWindow } from '../OrderWindow';
import { OrdersItem } from '../OrdersItem';
import { Loader } from '../Loader';

export const Orders = () => {
  const [ isShow, setIsShow ] = useState<number | null>(null);

  const {
    orders,
    isLoading,
    error
  } = useAppSelector(state => state.orderReducer);

  if(error) {
    return (
      <h1>Somesing went wrong...</h1>
    );
  }

  if(isLoading) {
    return <Loader />
  }

  return (
    <section className="orders flex-grow-1">
      <div className="orders__head d-flex">
        <button className="btn btn-success orders__btn">
          +
        </button>
        <h2>Приходы / {orders.length}</h2>
      </div>
      <div className={cn('orders__body', {open: isShow})}>
        <div className="orders__list">
          {orders.map(order => (
            <OrdersItem
              key={order.id}
              order={order}
              isShow={isShow}
              setIsShow={setIsShow}
            />
          ))}
        </div>
        <OrderWindow isShow={isShow} />
      </div>
    </section>
  );
}