export interface Dish {
  id: string;
  title: string;
  image: string;
  price: string;
}

export type ApiDish = Omit<Dish, 'id'>;


export interface DishesList {
  [id: string]: ApiDish;
}

export interface Cart {
  dish: Dish;
  amount: number;
}
export type Order = Omit<Dish, 'image'>

export interface OrderList {
  dish: Order;
  amount: number;
}

export interface ApiOrder {
  [id: string]: number;
}

export interface ApiOrders {
  [id: string]: ApiOrder;
}

