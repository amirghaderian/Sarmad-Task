import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { Dialog, DialogTitle, DialogContent, Box } from "@mui/material";
import { DialogActions, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import ShopingCardTodos from "../shopingCardTodos/ShopingCardTodos";
import { boxContainerStyle, boxItemStyle } from "./dialogStyle";
import { toast } from "react-toastify";
import { CustomDialogProps, ProductParams } from "./dialog.type";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CustomeDialogs = ({ children }: CustomDialogProps) => {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
    const storedProducts = localStorage.getItem("products");
    setProducts(storedProducts ? JSON.parse(storedProducts) : []);
  };

  const notifySuccess = (proccess: string) => toast.success(proccess);
  const handleDelete = (id: number) => {
    notifySuccess("حذف موفق");
    const filterProduct = products.filter((p: { id: number }) => p.id !== id);
    setProducts(filterProduct);
    localStorage.setItem("products", JSON.stringify(filterProduct));
  };
  const handleClose = () => {
    setOpen(false);
  };
  const initialValue = 0;
  const sumArray = products.map((i: { price: any }) => i.price);
  const totalPrice = sumArray
    .reduce((a: any, c: any) => a + c, initialValue)
    .toFixed(2);
  return (
    <>
      <Button
        variant="text"
        disableElevation
        disableRipple
        onClick={handleClickOpen}
      >
        {children}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2, mr: "auto" }}>سبد خريد</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[700],
          }}
        >
          <Close />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom component="div">
            {products.length !== 0 && (
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  disableRipple
                  style={{ backgroundColor: "whitesmoke", fontSize: "large",padding:0,margin:0 }}
                >
                  {"$" + totalPrice}
                </Button>
              </Typography>
            )}
            {products.length === 0 ? (
              <div>هنوز هیچ محصولی درون سبد خرید شما وجود ندارد!</div>
            ) : (
              <Box sx={boxContainerStyle}>
                <Box sx={boxItemStyle}>
                  {products.map((product: ProductParams) => {
                    return (
                      <ShopingCardTodos
                        key={product.id}
                        todo={{
                          ...product,
                          category: product.category!,
                          description: product.description!,
                          image: product.image!,
                          price: product.price!,
                          rating: product.rating!,
                          title: product.title!,
                        }}
                        onDelete={handleDelete}
                      />
                    );
                  })}
                </Box>
              </Box>
            )}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            تایید
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};
export default CustomeDialogs;
