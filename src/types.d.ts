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
export interface OrderList {
  id: string;
  dishes: Cart[];
}

export interface ApiOrder {
  [id: string]: number;
}

export interface ApiOrders {
  [id: string]: ApiOrder;
}