import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  position: fixed;
  background-color: rgba(89, 86, 86, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 484px;
    height: 484px;
    background: #fffcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  p {
    font-size: 30px;
    line-height: 42px;
    color: #000305;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;

    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    width: 345px;
    font-size: 14px;
    line-height: 20px;
    color: #000305;
  }

  input {
    width: 345px;
    height: 44px;
    background: #fffcfc;
    border: 1px solid #000305;
    border-radius: 4px;
    margin-bottom: 10px;
    padding-left: 5px;
  }

  form > button {
    margin-top: 48px;
    background: #000305;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 185px;
    height: 48px;
    font-size: 25px;
    line-height: 35px;
    color: #ffffff;
  }

  form > button:hover {
    background: #363738;
  }

  .closeModal {
    border: none;
    font-size: 28px;
    background: transparent;
    margin-right: 15px;
    margin-top: 11px;
  }

  .div-close {
    text-align: end;
  }
`;
