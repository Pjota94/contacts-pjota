import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .box {
    width: 914px;
    height: 467px;
    background: #fffcfc;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .create-contact {
    width: 185px;
    height: 48px;
    background: #5b5d5e;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-size: 25px;
    line-height: 35px;
    color: #ffffff;
    border: none;
    margin-top: -59px;
    margin-left: -728px;
  }

  .create-contact:hover {
    background: #363738;
  }

  .titles {
    display: flex;
    width: 918px;
    justify-content: center;
    margin-top: 25px;
    font-size: 23px;
    line-height: 32px;
  }

  .nome {
    width: 247px;
  }

  .email {
    width: 188px;
  }

  .telefone {
    width: 162px;
  }

  .data {
    width: 132px;
  }

  .contato {
    height: 50px;
    border-bottom: 1px solid #363738;
    width: 881px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
  .box-cards {
    overflow: scroll;
    height: 408px;
    width: 811px;
  }

  .box-cards::-webkit-scrollbar {
    height: 6px;
    width: 6px;
  }
  .box-cards::-webkit-scrollbar-thumb {
    background: #33d5b4;
    border-radius: 5px;
  }
  .box-cards::-webkit-scrollbar-corner {
    background-color: transparent;
  }
`;
