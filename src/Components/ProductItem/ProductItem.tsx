import Modal from 'react-modal';
import trash from '../../images/icon-trash.svg';
import { useAppDispatch } from '../../store/hooks';
import { productSlice } from '../../store/reducers/ProductSlice';
import { Product } from '../../Types/Product';
import { prepeadProductDate } from '../../utils/dateFormaters';
import { MouseEventHandler, useCallback, useState } from 'react';
import { OrderedProduct } from '../OrderedProduct';

Modal.setAppElement('#root');

interface Props {
  product: Product;
}

export const ProductItem: React.FC<Props> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    id,
    isNew,
    photo,
    title,
    type,
    guarantee,
    order
  } = product;

  const openModal = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  const firstPrice = product.price.find((price) => price.isDefault === 1);
  const secondPrice = product.price.find((price) => price.isDefault === 0);

  const dispatch = useAppDispatch();

  const handleDelete: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(productSlice.actions.removeProduct(id));
  };


  return (
    <div className="products-item d-flex gap-3 justify-content-around align-items-center">
      <img
        src={photo}
        alt={title}
        className="products-item__image"
      />

      <div className="products-item__title d-flex flex-column">
        <span className="text-decoration-underline">
          {title}
        </span>
        <span className="small-str">
          {type}
        </span>
      </div>

      <div className="products-item__period d-flex flex-column">
        <span className="products-item__from">
          с {prepeadProductDate(guarantee.start)}
        </span>
        
        <span className="products-item__to">
          по {prepeadProductDate(guarantee.end)}
        </span>
      </div>
      {isNew
        ? (
          <span className="products-item__condition">
            Новый
          </span>
        )
        : (
          <span className="products-item__condition text-warning">
            Б/У
          </span>
        )
      }
      <div className="products-item__cost d-flex flex-column">
        <span className="small-str">
        {`${secondPrice?.value} ${secondPrice?.symbol}`}
        </span>
        <span className="big-str">
          {`${firstPrice?.value} ${firstPrice?.symbol}`}
        </span>
      </div>
      <span className="products-item__order text-decoration-underline">
        {`Order ${order}`}
      </span>
      <div className="products-item__date d-flex flex-column">
        <span className="small-str">06/12</span>
        <span className="big-str">06 / Сен / 2017</span>
      </div>
      <a
        href="#"
        className="products-item__delete"
        onClick={openModal}
      >
        <img src={trash} alt="delete button" />
      </a>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Product Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal__head">
          <h2 className="modal__head--title">Вы уверены что хотите удалить этот продукт?</h2>
          <hr />
        </div>

        <div className="modal__body d-flex flex-column">
          <OrderedProduct product={product} />
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