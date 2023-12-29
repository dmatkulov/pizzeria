export interface Dish {
  id: string;
  title: string;
  image: string;
  price: string;
}

export type ApiDish = Omit<Dish, 'id'>

export interface PizzaList {
  [id: string]: ApiDish;
}

export interface Cart {
  dish: Dish;
  amount: number;
}

export interface ApiOrder {
  [id: string]: number;
}