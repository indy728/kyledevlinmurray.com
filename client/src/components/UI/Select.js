import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    padding: 2rem;
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

const Select = styled.select`
    /* outline: none;
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
    } */
`;

const sel = ({
  label,
  className,
  options,
  value,
  changed,
}) => {
  let selectElement = null;
  const selectOptions = options.map((option) => (
    <option key={option}>{option}</option>
  ));

  selectElement = (
    <Select
      className={className}
      value={value}
      onChange={changed}
    >
      {selectOptions}
    </Select>
  );

  return (
    <Wrapper className={className}>
      <Label>
        {`${label}*`}
      </Label>
      {selectElement}
    </Wrapper>
  );
};

export default sel;
