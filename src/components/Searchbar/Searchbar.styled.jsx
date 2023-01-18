import styled from "styled-components";

export const SearchbarHeader = styled.header`
    top: 0; 
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    background-color: #3f91b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const SearchbarForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #ffffff;
    border-radius: 3px;
    overflow: hidden;
`

export const SearchbarInput = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 18px;
    border: none;
    outline: none;
    padding-left: 40px;
    padding-right: 4px;
`

export const SearchbarBtn = styled.button`
    display: inline-block;
    width: 70px;
    height: 40px;
    border: 0;
    background-color: #1aec80;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    :hover {
        opacity: 2
    }
`

export const LabelBtn = styled.span`
`