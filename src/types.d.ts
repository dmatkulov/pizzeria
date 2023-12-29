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