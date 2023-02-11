import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 803px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 5px;

  .info-name {
    width: 247px;
  }

  .info-email {
    width: 188px;
  }

  .info-telefone {
    width: 152px;
  }

  .info-data {
    width: 132px;
    text-align: center;
  }

  .auxiliar-btns {
    width: 50px;
  }

  .buttons {
    width: 50px;
    display: flex;
  }

  .btn-edit {
    border: none;
    background-color: transparent;
    font-size: 25px;
    margin-right: 5px;
  }

  .btn-edit:hover {
    color: #363738;
  }

  .btn-delete {
    border: none;
    background-color: transparent;
    font-size: 25px;
  }

  .btn-delete:hover {
    color: #363738;
  }
`;
