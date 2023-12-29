export interface Pizza {
  id: string;
  title: string;
  image: string;
  price: string;
}

export type PizzaApi = Omit<Pizza, 'id'>

export interface PizzaList {
  [id: string]: PizzaApi;
}