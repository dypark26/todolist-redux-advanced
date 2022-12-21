import React from "react";
import styled from "styled-components";

function Header({ children }) {
  return (
    <TopHeader>
      <p>{children}</p>
      <p>Redux</p>
    </TopHeader>
  );
}

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  font-size: 20px;
  color: rgb(236, 236, 236);
`;

export default Header;
