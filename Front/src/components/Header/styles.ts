import styled from "styled-components";

export const Container = styled.header`
  height: 130px;
  background: #fffcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 48px;
    line-height: 67px;
    color: #000305;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-left: 91px;
    cursor: pointer;
  }

  .buttons {
    margin-right: 154px;
  }

  button {
    font-size: 30px;
    line-height: 42px;
    color: #000305;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: transparent;
    border: none;
    margin-right: 43px;
    height: 192px;
    width: 130px;
  }

  button:hover {
    background: rgb(51, 213, 180);
    background: linear-gradient(
      180deg,
      rgba(51, 213, 180, 1) 0%,
      rgba(51, 213, 180, 1) 21%,
      transparent 21%
    );
  }
`;
