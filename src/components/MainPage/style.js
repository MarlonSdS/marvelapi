import styled from 'styled-components'

export const MainDiv = styled.div`
    width: 90%;
    margin-top: 80px !important;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2%;
    @media (max-width: 1050px) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 23rem;
    background-color: #1A1A20;
`

export const Capa = styled.img`
    width: 150px;
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: aliceblue;
    max-height: 100%;
    width: 60%;
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

export const ComicName = styled.a`
    font-size: 1.5rem;
    &:hover{
        cursor: pointer;
    }
`


