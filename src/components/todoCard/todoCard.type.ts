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
  onAddProduct: any;
  onDelete: any;
  myProductList: any;
}
export default TodoCardParams;
