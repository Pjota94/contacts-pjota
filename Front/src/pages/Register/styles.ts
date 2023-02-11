import styled from "styled-components";

export const Container = styled.div`
  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .card-register {
    background: #fffcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 484px;
    height: 606px;
  }

  p {
    font-size: 30px;
    line-height: 42px;
    color: #000305;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
    margin-top: 45px;
    margin-bottom: 21px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    font-size: 14px;
    line-height: 20px;
    color: #000305;
    width: 345px;
    margin-bottom: 3px;
  }

  input {
    width: 345px;
    height: 44px;
    background: #fffcfc;
    border: 1px solid #000305;
    border-radius: 4px;
    margin-bottom: 10px;
    padding-left: 5px;
    font-size: 18px;
  }

  button {
    background: #000305;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 185px;
    height: 48px;
    font-size: 25px;
    line-height: 35px;
    color: #ffffff;
    margin-top: 15px;
    margin-bottom: 6px;
  }

  button:hover {
    background: #14181c;
  }

  .div-span {
    display: flex;
    justify-content: center;
  }

  .span-text {
    font-size: 15px;
    line-height: 21px;
    color: #000305;
  }

  .span-link {
    font-size: 15px;
    line-height: 21px;
    text-decoration-line: underline;
    color: #33d5b4;
    margin-left: 3px;
  }
`;
