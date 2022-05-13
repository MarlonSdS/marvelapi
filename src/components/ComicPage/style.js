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