import { Card, Box, Button, CardMedia, Badge } from "@mui/material";
import { CardActions } from "@mui/material";
import {
  boxActionStyle,
  boxMediaStyle,
  btnAddStyle,
  btnShowStyle,
  cardActionsStyle,
  cardMedoaStyle,
  cardStyle,
  toastContainerStyle,
} from "./todoCardStyle";
import TodoCardParams from "./todoCard.type";
import { ToastContainer, toast } from "react-toastify";

const TodoCard = ({ todo,setMyProductList,myProductList ,onAddProduct}: TodoCardParams) => {
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
            onClick={()=>onAddProduct(todo)}
            sx={btnAddStyle}
          >
            افزودن
          </Button>
          <Button
            variant="contained"
            disableElevation
            disableRipple
            sx={btnShowStyle}
          >
            نمايش كامل
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
export default TodoCard;
