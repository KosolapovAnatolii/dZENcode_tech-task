import Modal from 'react-modal';
import cn from 'classnames';
import { Order } from '../../Types/Order';
import list from '../../images/icon-list.svg';
import trash from '../../images/icon-trash.svg';
import arrow from '../../images/icon-arrow.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { orderSlice } from '../../store/reducers/OrderSlice';
import { prepeadOrderDate } from '../../utils/dateFormaters';
import { getSum } from '../../utils/getSum';
import { useState } from 'react';
import { OrderedProduct } from '../OrderedProduct';

Modal.setAppElement('#root');

interface Props {
  order: Order;
  isShow: number | null;
  setIsShow: (id: number | null) => void;
};

export const OrdersItem: React.FC<Props> = ({
  order,
  isShow,
  setIsShow
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    id,
    title,
    date,
    products,
  } = order;
  const isCurrentOrder = id === isShow;

  const openModal = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleShow = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsShow(id);
  };

  const handleUnShow = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsShow(null);
  };

  const {
    products: visibleProducts
  } = useAppSelector(state => state.productReducer);

  const orderedProducts = visibleProducts.filter(product => products.includes(product.id));
  
  const dispatch = useAppDispatch();
  const { products: currentProducts } = useAppSelector(state => state.productReducer);

  const { fullDate, shortDate } = prepeadOrderDate(date);
  const { USD, UAH } = getSum(order, currentProducts);

  const handleDelete = () => {
    dispatch(orderSlice.actions.removeOrder(id));
  };
  
  return (
    <div className="orders-item d-flex justify-content-between align-items-center">
      {(!!isShow) || (
        <span className="orders-item__name text-decoration-underline">
          {title}
        </span>
      )}

      <div className="orders-item__details d-flex align-items-center gap-3">
        <a
          href="#"
          className="orders-item__link d-flex justify-content-around align-items-center"
          onClick={handleShow}
        >
          <img 
            src={list} 
            alt="ditails button" 
            className="orders-item__img"
          />
        </a>
        <div className="orders-item__number d-flex flex-column justify-content-start">
          <span className="big-str">{products.length}</span>
          <span className="small-str">Продукта</span>
        </div>
      </div>

      <div className="orders-item__column d-flex align-items-center flex-column">
        <span className="small-str">{shortDate}</span>
        <span className="big-str">{fullDate}</span>
      </div>
      {!!isShow && (
        <a
          href="#"
          className={cn('orders-item__arrow', {visible: isCurrentOrder})}
          onClick={handleUnShow}
        >
          <img src={arrow} alt="unshow arrow" />
        </a>
      )}
      {(!!isShow) || (
        <>
          <div className="orders-item__column d-flex align-items-center flex-column">
            <span className="small-str">{`${USD} $`}</span>
            <span className="big-str">{`${UAH} UAH`}</span>
          </div>
    
          <a 
            href="#"
            className="orders-item__delete"
            onClick={openModal}
          >
            <img src={trash} alt="delete button" />
          </a>
        </>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Product Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal__head">
          <h2 className="modal__head--title">Вы уверены что хотите удалить этот приход?</h2>
          <hr />
        </div>

        <div className="modal__body d-flex flex-column">
          {orderedProducts.map((product) => {
            return (
              <OrderedProduct key={product.id} product={product} />
            );
          })}
        </div>

        <div className="modal__footer d-flex align-items-center justify-content-end gap-3">
          <button
            className="modal__footer--button"
            onClick={closeModal}
          >
            отменить
          </button>

          <button
            className="modal__footer--button"
            onClick={handleDelete}
          >
            удалить
          </button>
        </div>
      </Modal>
    </div>
  );
}