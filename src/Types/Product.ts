export interface Product {
  id: number,
  serialNumber: number,
  isNew: number,
  photo: string,
  title: string,
  type: string,
  specification: string,
  guarantee: {
    start: string,
    end: string
  },
  price: Price[],
  order: number,
  date: string
}

interface Price {
  value: number,
  symbol: string,
  isDefault: number,
}