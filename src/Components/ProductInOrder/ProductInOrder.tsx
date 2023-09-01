import { Product } from '../../Types/Product';
import trash from '../../images/icon-trash.svg';
import { useAppDispatch } from '../../store/hooks';
import { productSlice } from '../../store/reducers/ProductSlice';

interface Props {
  product: Product;
};

export const ProductInOrder: React.FC<Props> = ({ product }) => {
  const {
    id,
    photo,
    title,
    type,
    isNew
  } = product;

  const dispatch = useAppDispatch();

  const handleDelete = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
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
    <a
      href="#"
      className="products-item__delete"
      onClick={handleDelete}
    >
      <img src={trash} alt="delete button" />
    </a>
  </div>
  );
}