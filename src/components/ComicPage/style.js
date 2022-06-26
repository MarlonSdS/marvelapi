import styled from 'styled-components'

export const Panel = styled.div`
    height: 85vh;
    width: 90vw;
    margin: auto;
    margin-top: 5%;
    display: flex;
    flex-direction: row;
`

export const Capa = styled.img`
    height: 70%;
    margin-top: 5%;
    margin-left: 2%;
    margin-right: 3%;
`

export const Infos = styled.div`
    display: flex;
    justify-content: center;
    width: 50vw;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 1fr;
    
`

export const Autores = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: aliceblue;
    max-height: 100%;
    width: 60%;
    height: 200px;
    overflow: scroll;
    font-weight: bold;
    margin-left: 5px;
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background:  rgba(23, 23, 30, 0.5);
    }
    ::-webkit-scrollbar-corner{
        background: transparent;
    }
`

export const Title = styled.h1`
    font-size: 3rem;
    color: aliceblue;
    font-family: Arial, Helvetica, sans-serif;
`

export const Sinopse = styled.p`
    color: aliceblue;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.5rem;
`

export const CreatorName = styled.p`
    line-height: .1;
    font-weight: normal;
`

export const Buybutton = styled.button`
    background-color: white;
    color: red;
    text-shadow: 1rem gray;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 0px;
    border: none;
    border-radius: 2px;
`