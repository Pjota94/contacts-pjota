import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Jockey One', sans-serif;
    }
    body{
        background-color: #33D5B4;
    }
    button{
        cursor: pointer;
    }
    
    ul ol li{
        list-style: none;
    }


`;
