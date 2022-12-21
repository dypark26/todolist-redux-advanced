import React, { useEffect, useState } from "react";
import axios from "axios"; // axios import 합니다.

const App = () => {
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);
  return <div>App</div>;
};

export default App;
