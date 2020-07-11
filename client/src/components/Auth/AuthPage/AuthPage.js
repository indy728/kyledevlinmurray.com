import React from 'react';
import styled from 'styled-components';
// import { ContentBlock, Header, Button, Input } from 'components/UI'

const Wrapper = styled.div`
  width: 20rem;
  height: 40rem;
  background-color: ${({ theme }) => theme.palette.analog.coolest};
`;

const AuthForm = styled.form`
    width: 100%;
`;

const AuthInput = styled.input`
    width: 95%;
    max-width: 60rem;

    @media (max-width: ${({ theme }) => theme.media.tablet} ) {
        max-width: 45rem;
    }
`;

const FormButton = styled.button`
    width: 18rem;
    font-weight: bold;
    margin-top: 2rem;
`;

const SwitchButton = styled.div`
    text-decoration: underline;
    background-color: inherit;
    border: none;
`;

const authPage = ({
  formElementsObj,
  isSignUp,
  formSubmit,
  formIsValid,
  inputChanged,
  switchAuthMode,
}) => {
  const formElementsArray = [];

  for (const key in formElementsObj) {
    formElementsArray.push({
      id: key,
      config: formElementsObj[key],
    });
  }
  const form = formElementsArray.map((formElement) => (
    <AuthInput
      key={formElement.id}
      autocomplete={formElement.config.elementConfig.autocomplete}
      className="auth-form--input"
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      invalid={!formElement.config.valid}
      shouldValidate={formElement.config.validation}
      touched={formElement.config.touched}
      changed={(event) => inputChanged(event, formElement.id)}
    />
  ));

  return (
    <Wrapper
      className="auth=page"
    >
      <div
        className="auth-page--div"
      >
        {isSignUp ? 'SIGN UP' : 'LOG IN'}
      </div>
      <AuthForm
        className="auth-form"
        onSubmit={formSubmit}
      >
        {form}
        {/* <FormButton disabled={!formIsValid}>SUBMIT</FormButton> */}
        <FormButton>SUBMIT</FormButton>
      </AuthForm>
      <SwitchButton
        className="auth-page--switch"
        clicked={switchAuthMode}
      >
        {isSignUp ? 'Already registered? Sign in!' : 'First time here? Sign up!'}
      </SwitchButton>
    </Wrapper>
  );
};

export default authPage;
