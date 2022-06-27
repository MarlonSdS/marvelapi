import styled from 'styled-components'

export const Panel = styled.div`
    height: 85vh;
    width: 90vw;
    margin: auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
`

export const Label = styled.h1`
    text-align: center;
    color: aliceblue;
    font-size: 22px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const MapContainer = styled.div`
    height: 600px;
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const ConfirmButton = styled.button`
    background-color: white;
    color: red;
    text-shadow: 1rem gray;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: 0px;
    width: 800px;
    margin: auto;
    margin-top: 2px;
    border: none;
    border-radius: 2px;
`