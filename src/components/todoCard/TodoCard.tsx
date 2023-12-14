import { Card, Box, Button, CardMedia, Badge } from "@mui/material";
import { CardActions } from "@mui/material";
import { boxMediaStyle, cardMedoaStyle, cardStyle } from "./todoCardStyle";
import TodoParams from "./todoCard.type";

const TodoCard = (data: TodoParams) => {
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
      <Box sx={{ mb: 8 }}>
        <CardActions
          disableSpacing
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button
            variant="contained"
            disableElevation
            disableRipple
            sx={{
              bgcolor: "#FFD814",
              color: "#0F1111",
              "&:hover": {
                backgroundColor: "#F0B800",
              },
            }}
          >
            افزودن
          </Button>
          <Button
            variant="contained"
            disableElevation
            disableRipple
            sx={{
              bgcolor: "#42b4e5",
              color: "#0F1111",
              "&:hover": {
                backgroundColor: "#1597DD",
              },
            }}
          >
            نمايش كامل
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
export default TodoCard;
