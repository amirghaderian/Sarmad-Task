import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { api } from "../../services/api";
import { TodoCard } from "..";
import { boxContainerStyle, boxItemStyle } from "./todoStyle";
import TodoParams from "./todo.type";

const Todo = ({ onAddTodo, onAddProduct }) => {
  const [todoList, setTodoList] = useState([]);
  const [myProductList, setMyProductList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await api.get("products");
      setTodoList(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };
 localStorage.setItem("products",JSON.stringify(myProductList) )
  const handleAddProduct =  (product) => {
    setMyProductList((pre)=>[...pre,product])
   
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={boxContainerStyle}>
      <Box sx={boxItemStyle}>
        {todoList.map((todo) => (
          <TodoCard
            onAddProduct={handleAddProduct}
            myProductList={myProductList}
            setMyProductList={setMyProductList}
            todo={todo}
            key={todo.id}
          />
        ))}
      </Box>
    </Box>
  );
};
export default Todo;
