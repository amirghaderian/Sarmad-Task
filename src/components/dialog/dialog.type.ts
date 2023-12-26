import { ReactNode } from "react";

interface CustomDialogProps {
  children: ReactNode;
}
interface ProductParams {
  id: any;
  category?: string;
  description?: string;
  image?: string;
  price?: number;
  rating?: { count: number; rate: number };
  title?: string;
}
export type { CustomDialogProps, ProductParams };
