import styled from "styled-components";

export const LoadMoreBtn = styled.button`
    display: block;
    width: 100px;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    background-color: #1aec80;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    margin: 20px auto;

    :hover {
    opacity: 1;
`