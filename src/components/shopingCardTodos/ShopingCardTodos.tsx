import { Card, Box, Button, CardMedia, Badge } from "@mui/material";
import { CardActions } from "@mui/material";
import {
  boxActionStyle,
  boxMediaStyle,
  btnAddStyle,
  cardActionsStyle,
  cardMedoaStyle,
  cardStyle,
  toastContainerStyle,
} from "./shopingCardTodosStyle";
import ShopingCardParams from "./shopingCardTodos.type";
import { ToastContainer } from "react-toastify";

const ShopingCardTodos = ({
  todo,
  onDelete,
}: ShopingCardParams) => {
  return (
    <Card sx={cardStyle}>
      <Badge
        sx={{
          position: "absolute",
          left: 7,
          fontSize: "17px",
          fontWeight: "bold",
          color: "#23254E",
        }}
      >
        {`${todo.price}$`}
      </Badge>
      <Box sx={boxMediaStyle}>
        <CardMedia
          component="img"
          src={todo.image}
          alt="Paella dish"
          sx={cardMedoaStyle}
        />
      </Box>
      <Box sx={boxActionStyle}>
        <CardActions disableSpacing sx={cardActionsStyle}>
          <Button
            variant="contained"
            disableElevation
            disableRipple
            onClick={() => onDelete(todo.id)}
            sx={btnAddStyle}
          >
            حذف
          </Button>
        </CardActions>
      </Box>
      <ToastContainer
        style={toastContainerStyle}
        position="bottom-right"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Card>
  );
};
export default ShopingCardTodos;
