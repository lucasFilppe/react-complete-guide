import style from "styled-components";

export const Container = style.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    margin: 2rem 0;
    padding: 1rem;
    border-radius: 12px;
    background-color: #4b4b4b;
    color: white;
    font-size: 1.2rem;
    
    h1{
        font-size: 3rem;
        background: #151515;
        border-radius: 12px;
        border: 1px solid white;
        height: 4rem;
        margin: 3rem; 

    }

    p {
        font-size: 2rem;
    }
    
    button{
        background-color: #461D7C;
        height: 4rem;
        font-size: 3rem;
        border-radius: 12px;
        border: 1px solid white;
        color: white;
        margin: 3rem;
    }



  
`
