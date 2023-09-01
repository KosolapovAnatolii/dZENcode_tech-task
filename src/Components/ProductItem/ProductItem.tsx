import trash from '../../images/icon-trash.svg';
import { useAppDispatch } from '../../store/hooks';
import { productSlice } from '../../store/reducers/ProductSlice';
import { Product } from '../../Types/Product';
import { prepeadProductDate } from '../../utils/dateFormaters';

interface Props {
  product: Product;
}

export const ProductItem: React.FC<Props> = ({ product }) => {
  const {
    id,
    isNew,
    photo,
    title,
    type,
    guarantee,
    order
  } = product;

  const firstPrice = product.price.find((price) => price.isDefault === 1);
  const secondPrice = product.price.find((price) => price.isDefault === 0);

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
        onClick={handleDelete}
      >
        <img src={trash} alt="delete button" />
      </a>
    </div>
  );
}