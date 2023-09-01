import { Product } from "../Types/Product";

export const products: Product[] = [
  {
    id: 1,
    serialNumber: 34,
    isNew: 1,
    photo: './images/Monitor.png',
    title: 'PC Monitor Asus',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    serialNumber: 55,
    isNew: 1,
    photo: './images/iPhone.png',
    title: 'iPhone Apple X',
    type: 'Phones',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 1100, symbol: 'USD', isDefault: 0},
      {value: 26000, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    serialNumber: 89,
    isNew: 1,
    photo: './images/MacBook.png',
    title: 'MacBook Air m2',
    type: 'Laptops',
    specification: 'Specification 3',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 1500, symbol: 'USD', isDefault: 0},
      {value: 36000, symbol: 'UAH', isDefault: 1}
    ],
    order: 3,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    serialNumber: 144,
    isNew: 0,
    photo: './images/Monitor.png',
    title: 'PC Monitor Asus',
    type: 'Monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 100, symbol: 'USD', isDefault: 0},
      {value: 2600, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    serialNumber: 233,
    isNew: 0,
    photo: './images/iPhone.png',
    title: 'iPhone Apple X',
    type: 'Phones',
    specification: 'Specification 2',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 1100, symbol: 'USD', isDefault: 0},
      {value: 26000, symbol: 'UAH', isDefault: 1}
    ],
    order: 2,
    date: '2017-06-29 12:09:33'
  },
  {
    id: 6,
    serialNumber: 377,
    isNew: 0,
    photo: './images/MacBook.png',
    title: 'MacBook Air m2',
    type: 'Laptops',
    specification: 'Specification 3',
    guarantee: {
      start: '2017-06-29 12:09:33',
      end: '2017-06-29 12:09:33'
    },
    price: [
      {value: 1500, symbol: 'USD', isDefault: 0},
      {value: 36000, symbol: 'UAH', isDefault: 1}
    ],
    order: 1,
    date: '2017-06-29 12:09:33'
  }
];