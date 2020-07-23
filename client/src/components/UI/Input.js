import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    align-items: center;
    
    .number {
      width: 20rem;
    }
`;

const Label = styled.label`
    font-weight: bold;
    margin-bottom: .4rem;
    text-transform: capitalize;
`;

const Input = styled.input`
    outline: none;
    border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')};
    background-color: ${(props) => (props.invalid ? 'rgb(250, 157, 157)' : 'white')};
    font: inherit;
    padding: 6px 10px;
    display: block;
    box-sizing: border-box;
    text-align: center;

    :focus {
        outline: none;
        background-color: #ccc;
    }
`;

const input = ({
  className,
  type,
  placeholder,
  autocomplete,
  value,
  invalid,
  touched,
  changed,
  label,
  isRequired,
}) => {
  let inputElement = null;

  inputElement = (
    <Input
      className={className}
      type={type}
      placeholder={placeholder}
      autocomplete={autocomplete}
      value={value}
      invalid={invalid && touched}
      onChange={changed}
    />
  );

  return (
    <Wrapper className={className}>
      <Label>
        {`${label}${isRequired ? '*' : ''}`}
      </Label>
      {inputElement}
    </Wrapper>
  );
};

export default input;
