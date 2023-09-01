import { Order } from "../Types/Order";
import { Product } from "../Types/Product";

interface Total {
  USD: number,
  UAH: number,
};

export function getSum( order: Order, currentProducts: Product[]) {
  const totalPrice = order.products.reduce((total: Total, productId: number) => {
    const product = currentProducts.find(item => item.id === productId);

    if (product) {
      const priceUSD = product.price.find(item => item.isDefault === 0);
      const priceUAH = product.price.find(item => item.isDefault === 1);
      
      if (priceUSD) {
        total.USD = total.USD + priceUSD.value;
      }

      if (priceUAH) {
        total.UAH += priceUAH.value;
      }
    }
    
    return total;
  }, {USD: 0, UAH: 0});

  return totalPrice;
};
