import React, { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Header from "./Header";
import Input from "./Input";
import TodoList from "./TodoList";
import styled from "styled-components";
import { Reset } from "styled-reset";

const App = () => {
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <BackGround>
        <Reset />
        <Header>My Todo List</Header>
        <Input></Input>
        <TodoList isActive={true}></TodoList>
        <TodoList isActive={false}></TodoList>
      </BackGround>
    </div>
  );
};

const BackGround = styled.div`
  background-color: rgb(36, 36, 36);
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
  height: 100vh;
  min-width: 800px;
  max-width: 1200px;
`;

export default App;
