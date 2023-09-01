import { useAppSelector } from "../../store/hooks";
import { ProductInOrder } from "../ProductInOrder";

interface Props {
  isShow: number | null;
};

export const OrderWindow: React.FC<Props> = ({ isShow }) => {
  const { orders } = useAppSelector(state => state.orderReducer);
  const { products: visibleProducts } = useAppSelector(state => state.productReducer);

  const selectedOrder = orders.find(order => order.id === isShow);

  const productsInOrder = visibleProducts.filter((prod => selectedOrder?.products.includes(prod.id)));

  return (
    <div className="order-window d-flex flex-column gap-3">
      <h3 className="order-window__name">{selectedOrder?.title}</h3>
      <div className="order-window__container">
        {productsInOrder.map(product => {
          return (
            <ProductInOrder product={product} />
          )
        })}
      </div>
    </div>
  );
}