import { Product } from "../../Types/Product";

interface Props {
  product: Product;
};

export const OrderedProduct: React.FC<Props> = ({ product }) => {
  const { photo, title } = product;
  return (
    <div className="ordered-product d-flex justify-content-center align-items-center gap-3">
      <img
        src={photo} 
        alt={title} 
        className="ordered-product__image"
      />
      <span className="ordered-product__title">{title}</span>
    </div>
  );
}