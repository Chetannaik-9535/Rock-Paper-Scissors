import styled from 'styled-components'

export const GameScoreContainer = styled.div` 
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : space-around;
    background-color : transparent;
    background-size : cover;
    border : 4px solid #ffffff;
    margin-top : 10px;
    margin : 30px;
    border-radius : 10px;
    height : 27vh;
    width : 70vw;
`

export const GameOptions = styled.h1`
    font-family : Bree Serif;
    font-size : 25px;
    color : #ffffff;
    padding : 10px;
    margin : 5%;
`

export const OptionContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : space-between;
`

export const ScoreBoardContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    background-color : #ffffff;
    background-size : cover;
    height : 100px;
    width : 140px;
    border-radius : 10px;
`

export const ShowScore = styled.p`
    font-family : Bree Serif;
    font-size : 25px;
    color : #223a5f;
    margin : 5px;
`

export const Score = styled.p`
    font-family : "Roboto";
    font-size : 35px;
    color : #223a5f;
    margin : 1px;
`
