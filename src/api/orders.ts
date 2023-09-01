import { Order } from "../Types/Order"

export const orders: Order[] = [
  {
    id: 1,
    title: 'Order 1 Computers',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    products: [1, 4]
  },
  {
    id: 2,
    title: 'Order 2 Phones',
    date: '2017-08-01 12:09:33',
    description: 'desc',
    products: [2, 5]
  },
  {
    id: 3,
    title: 'Order 3 Laptops',
    date: '2017-05-04 12:09:33',
    description: 'desc',
    products: [3, 6]
  }
]