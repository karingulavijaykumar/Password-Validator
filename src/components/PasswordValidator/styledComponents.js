// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  background-size: cover;
  height: 100vh;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #475569;
  align-items: center;
  height: 400px;
  width: auto;
`

export const Heading = styled.h1`
  font-size: 32px;
  color: #edeeff;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  font-size: 22px;
  color: #edeeff;
  font-family: 'Roboto';
  padding:20px;
`

export const ErrorText = styled.p`
  font-size: 14px;
  color: red;
  font-family: 'Roboto';
`

export const PasswordInput = styled.input`
  height: 50px;
  width: auto;
`
