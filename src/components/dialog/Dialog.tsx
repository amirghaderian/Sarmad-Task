import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { ReactNode, useState } from "react";
import ShopingCardTodos from "../shopingCardTodos/ShopingCardTodos";
import { Box } from "@mui/material";
import { boxContainerStyle, boxItemStyle } from "./dialogStyle";
import { toast } from "react-toastify";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
interface CustomDialogProps {
  children: ReactNode;
  TodoList: any;
  setTodoList: any;
  products: any;
  setProducts: any;
}

const CustomeDialogs = ({
  children,
  products,
  setProducts,
}: CustomDialogProps) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState();
  const handleClickOpen = () => {
    setOpen(true);
    setProducts(JSON.parse(localStorage.getItem("products")));
  };
  const notifySuccess = (proccess: string) => toast.success(proccess);
  const handleDelete = (id) => {
    notifySuccess("حذف موفق");
    const filterProduct = products.filter((p) => p.id !== id);
    if (!filter) {
      setFilter(filterProduct);
      localStorage.setItem("products", JSON.stringify(filterProduct));
    } else {
      const filterdLast = filter.filter((p) => p.id !== id);
      setFilter(filterdLast);
      localStorage.setItem("products", JSON.stringify(filterdLast));
    }
    console.log(filterProduct);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const initialValue = 0;
  const sumArray = products.map((i) => i.price);
  const totalPrice = sumArray.reduce((a, c) => a + c, initialValue).toFixed(2);
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
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            {products.length !== 0 && (
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <Button
                  disableRipple
                  style={{ backgroundColor: "rgb(100,255,100)" }}
                >
                  {" "}
                  {"$" + totalPrice}
                </Button>
              </Typography>
            )}
            {products.length === 0 ? (
              <div>هنوز هیچ محصولی درون سبد خرید شما وجود ندارد!</div>
            ) : (
              <Box sx={boxContainerStyle}>
                <Box sx={boxItemStyle}>
                  {products.map((product) => {
                    return (
                      <ShopingCardTodos
                        todo={product}
                        setMyProduct={setProducts}
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
