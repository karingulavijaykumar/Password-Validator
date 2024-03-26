// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  ContentContainer,
  Heading,
  Paragraph,
  PasswordInput,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const [errorText, setErrorText] = useState('')

  const onChangeName = event => { 
    setPassword(event.target.value);
  }
  return (
    <MainContainer>
      <ContentContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <PasswordInput type="password" value={password} onChange={onChangeName} />
        {password.length < 8 && <ErrorText>Your password must be at least 8 characters</ErrorText>}
      </ContentContainer>
    </MainContainer>
  )
}
export default PasswordValidator
