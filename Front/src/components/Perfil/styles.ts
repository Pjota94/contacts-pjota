import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* min-height: 600px;
  align-items: center; */

  .box {
    width: 789px;
    height: 467px;
    background: #fffcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 200px;
    height: 205.03px;
    border: 1px solid #000000;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 500px;
    margin-top: 28px;
    margin-bottom: 26px;
  }

  .texts {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  button {
    background: #000305;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    width: 185px;
    height: 48px;
    font-size: 25px;
    line-height: 35px;
    color: #fffcfc;
    margin-top: 27px;
  }

  button:hover {
    background: #14181c;
  }
`;
