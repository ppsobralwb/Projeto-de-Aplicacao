import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
`
export const DefaultContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding-top: 2rem;

    h1 {
        font-weight: 300
    }
    
    .campo { 
        width: 50px;
    }
    
    #sub_btn {
        display: block;
        width: 100%;
        padding: 0.5rem;
        border: none;
        background: #222;
        color: #fff;
        border-radius: 3px;
        margin-top: .5rem;
        cursor: pointer;
    }
    
    #sub_btn:hover {
        background: #333;
        transition: all .5s
    }
    
    footer p {
        margin: 0;
        font-size: .9rem
    }

    .label {
        margin-bottom: 0.5rem;
        font-weight: 600;
        font-size: medium;
    }

    .campo { 
        padding: 0.5rem;
        width: 30rem;
        background-color: white;
    }
    .primary-button {
        margin-top: 5rem;
        margin-right: 1rem;
        padding: .6rem;
        width: 10rem;
        background: #222;
        border: none;
        color: #fff;
        font-size: 1.2rem;
        transition: all .5s;
        cursor: pointer;
        text-transform: capitalize
    }
`
export const FormContainer = styled.form `
    background: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 2rem;
    margin: 2rem 0 1rem 0;
    width: 20rem;

    input {
        margin: 0.5rem 0 0.5rem 0;
        width: 100%;
        padding: .5rem;
        border-radius: 5px;
        outline: none;
        border: none;
    }
`
