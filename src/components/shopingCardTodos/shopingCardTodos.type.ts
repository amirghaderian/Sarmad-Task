interface ShopingCardParams {
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
  onDelete:any
  myProduct: [];
}
export default ShopingCardParams;
