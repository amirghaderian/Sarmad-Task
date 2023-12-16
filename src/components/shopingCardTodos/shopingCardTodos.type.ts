interface TodoCardParams {
  todo: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { count: number; rate: number };
    title: string;
  };
  setMyProduct: any;
  myProduct: [];
}
export default TodoCardParams;
