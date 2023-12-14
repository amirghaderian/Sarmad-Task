import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TodoCard } from "..";
import { boxContainerStyle, boxItemStyle } from "./todoStyle";

const Todo = () => {
  const [todoList, setTodoList] = useState<{}[]>([]);
  const fetchData = async () => {
    await api
      .get("products")
      .then((res) => {
        const sliced = res.data.slice(0);
        setTodoList(sliced);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={boxContainerStyle}
    >
      <Box  sx={boxItemStyle}>
        {todoList.map((todo) => {
          return <TodoCard todo={todo} key={todo.id}  />;
        })}
      </Box>
    </Box>
  );
};

export default Todo;
