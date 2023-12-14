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
} from "./todoCardStyle";
import TodoCardParams from "./todoCard.type";

const TodoCard = (data: TodoCardParams) => {
  console.log();
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
        {`${data.todo.price}$`}
      </Badge>
      <Box sx={boxMediaStyle}>
        <CardMedia
          component="img"
          src={data.todo.image}
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
    </Card>
  );
};
export default TodoCard;
