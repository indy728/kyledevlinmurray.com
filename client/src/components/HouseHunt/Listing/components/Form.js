import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { Input, Select } from 'components/UI';
import DatePicker from 'react-datepicker';

const Wrapper = styled.form`
  width: 100%;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const ListingInputContainer = styled.div`
    width: 100%;
`;

const ListingInput = styled(Input)`
  width: 100%;
`;

const ListingInputRow = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;

  > :not(:first-child){
    margin-left: 2rem;
  }
`;

const FormHeader = styled.div`
  padding: .8rem;
  
  h1 {
    font-size: 3.2rem;
  }
`;


const Form = ({
  listingControls, submitListing, formIsValid, inputChanged, close,
}) => {
  const inputListing = (key) => {
    const {
      label,
      elementType,
      elementConfig,
      value,
      valid,
      validation: {
        isRequired,
      },
      touched,
    } = listingControls[key];

    let field = null;

    if (elementType === 'select') {
      const { options } = elementConfig;

      field = (
        <Select
          label={label}
          className="listing-select"
          options={options}
          value={value}
          touched={touched}
          changed={(event) => inputChanged(event, key)}
        />
      );
    } else if (elementType === 'date') {
      console.log('[Form] value: ', value);

      field = (
        <>
          <h3>{label}</h3>
          <DatePicker
            selected={value}
            onChange={(event) => inputChanged(event, key)}
          />
        </>
      );
    } else {
      const { type, placeholder, autocomplete } = elementConfig;

      field = (
        <ListingInput
          label={label}
          autocomplete={autocomplete || ''}
          className={`listing-input ${type}`}
          elementType={elementType}
          type={type}
          placeholder={placeholder}
          value={value}
          invalid={!valid}
          isRequired={isRequired}
          touched={touched}
          changed={(event) => inputChanged(event, key)}
        />
      );
    }

    return (
      <ListingInputContainer>
        {field}
      </ListingInputContainer>
    );
  };


  const controlKeys = Object.keys(listingControls);
  const listingObj = {};

  controlKeys.forEach((key) => {
    if (key !== 'contact') {
      listingObj[key] = inputListing(key);
    }
  });


  return (
    <Wrapper
      onSubmit={(e) => submitListing(e)}
    >
      <FormHeader>
        <h1>Add A Listing</h1>
      </FormHeader>
      {listingObj.title}
      {listingObj.link}
      {listingObj.location}
      {listingObj.sqft}
      {listingObj.br}
      {listingObj.rent}
      {listingObj.deposit}
      {listingObj.parking}
      {listingObj.laundry}
      {listingObj.dateAvailable}
      <div>
        <button
          onClick={close}
        >
          CANCEL
        </button>
        <button>
          SUBMIT
        </button>
      </div>
    </Wrapper>
  );
};


Form.propTypes = {
  submitListing: PropTypes.func.isRequired,
};

export default Form;
