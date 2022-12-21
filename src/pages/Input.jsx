import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../modules/todos";
import styled from "styled-components";

function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (title === "") {
      alert("제목을 입력하세요!");
      return;
    } else if (contents === "") {
      alert("내용을 입력하세요!");
      return;
    }
    dispatch(addTodo(title, contents));
    setTitle("");
    setContents("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <InputWrapper>
        <label>제목</label>
        <InputButton
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="어떤것을 해볼까요?"
        />
        <label>내용</label>
        <InputButton
          value={contents}
          onChange={(e) => setContents(e.target.value)}
          type="text"
          placeholder="설명을 적어주세요!!"
        />
        <SubmitButton backgroundColor="rgb(33, 174, 255)">추가</SubmitButton>
      </InputWrapper>
    </form>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: black;
  color: rgb(236, 236, 236);
`;

const InputButton = styled.input`
  border: none;
  background-color: rgb(57, 57, 57);
  color: rgb(236, 236, 236);
  border-radius: 10px;
  padding: 6px 10px 6px;
  width: 200px;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
`;

const SubmitButton = styled.button`
  backgroundcolor: color;
  color: white;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 20px;
  border: none;
  height: 40px;
  width: 100px;
  cursor: pointer;
`;

export default Input;
