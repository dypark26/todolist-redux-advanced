import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, switchButton } from "../modules/todos";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const handeDeleteButtonOnclick = () => {
    dispatch(deleteTodo(todo.id));
  };

  const switchButtonOnClick = () => {
    dispatch(switchButton(todo.id, todo.isDone));
  };

  return (
    <TodoWrapper>
      <TodoTop>
        <Link to={`/${todo.id}`} key={todo.id}>
          <GoToDetail>상세보기</GoToDetail>
        </Link>
        <TodoContentWrapper>
          <div>{todo.title}</div>
          <p>{todo.contents}</p>
        </TodoContentWrapper>
      </TodoTop>

      <TodoButttonWrapper>
        <CustomButton onClick={switchButtonOnClick} isDone={todo.isDone}>
          {todo.isDone ? "취소" : "완료"}
        </CustomButton>
        <CustomButton
          onClick={handeDeleteButtonOnclick}
          backgroundColor="rgb(38, 38, 38)"
        >
          삭제
        </CustomButton>
      </TodoButttonWrapper>
    </TodoWrapper>
  );
}

const CustomButton = styled.button`
  color: ${(props) => (props.children === "취소" ? "rgb(0, 0, 0)" : "white")};
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.children === "취소"
      ? "rgb(255, 123, 123)"
      : "rgb(33, 174, 255)"};
  border-radius: 20px;
  font-weight: 600;
  font-size: 15px;
  border: none;
  height: 40px;
  width: calc(50vh - 4px);
  cursor: pointer;
`;

const TodoWrapper = styled.div`
  width: 250px;
  height: 170px;
  border: none;
  background-color: rgb(239, 239, 239);
  border-radius: 10px;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 16px;
`;

const TodoTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  a {
    text-decoration: none;
  }
`;

const GoToDetail = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: rgb(33, 174, 255);
  cursor: pointer;
`;

const TodoContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  div {
    font-size: 26px;
    font-weight: 700;
  }
  p {
    font-size: 18px;
  }
`;

const TodoButttonWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export default Todo;
