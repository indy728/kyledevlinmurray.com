import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { updateObject } from 'shared/objectUtility';

const Wrapper = styled.div`
  position: fixed;
  z-index: 999999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(4, 4, 0, .7);
  justify-content: center;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const Form = styled.form`
  width: 40rem;
  background-color: white;
  padding: 5rem;
  height: 40rem;

  > :not(:first-child) {
    margin-top: 3rem;
  }

  @media ${device.md} {
    justify-content: center;
  }
`;

const ListingInputContainer = styled.div`
    width: 100%;
`;

const ListingInput = styled.input`
    /* flex: 1; */
    width: 100%;
    border: ${({ valid }) => (valid ? '1px solid red' : 'none')};
`;

const FormElement = styled.div`
  width: 100%;
  align-items: center;
`;

class ListingForm extends Component {
  state = {
    listingControls: {
      title: {
        label: 'title',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: true,
          length: {
            absMin: 10,
            absMax: 80,
          },
        },
        valid: false,
        touched: false,
      },
      link: {
        label: 'listing link',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: false,
        },
        valid: false,
        touched: false,
      },
      location: {
        label: 'location',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      rent: {
        label: 'rent',
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: false,
          isNum: true,
        },
        valid: false,
        touched: false,
      },
      deposit: {
        label: 'deposit',
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: false,
          isNum: true,
        },
        valid: false,
        touched: false,
      },
      br: {
        label: 'number of bedrooms',
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: true,
          isNum: true,
        },
        valid: false,
        touched: false,
      },
      sqft: {
        label: 'square footage',
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: false,
          isNum: true,
        },
        valid: false,
        touched: false,
      },
      contactName: {
        label: 'contact name',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: false,
        },
        valid: false,
        touched: false,
      },
      contactCompany: {
        label: 'contact company',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: false,
        },
        valid: false,
        touched: false,
      },
      contactPhone: {
        label: 'contact phone',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: false,
        },
        valid: false,
        touched: false,
      },
      contactEmail: {
        label: 'contact email',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: false,
        },
        valid: false,
        touched: false,
      },
      contactStatus: {
        label: 'contact status',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: false,
        },
        valid: false,
        touched: false,
      },
      laundry: {
        label: 'laundry',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      parking: {
        label: 'parking',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      viewed: {
        label: 'viewed',
        elementType: 'select',
        elementConfig: {
          type: 'select',
          options: ['yes', 'no'],
          placeholder: '',
          autocomplete: '',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  }

  checkValidity = (value, rules) => {
    let isValid = true;

    if (!rules) return true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.length) {
      isValid = value.length >= rules.length.absMin && value.length <= rules.length.absMax && isValid;
    }

    if (rules.isNum) {
      isValid = !isNaN(value) && isValid;
    }

    // TO DO
    // way more validation stuff

    return isValid;
  }

  inputChangedHandler = (event, key, valueType = 'value') => {
    const { listingControls } = this.state;

    console.log('[ListingForm] key: ', key);

    const controls = listingControls[key];
    const updatedControls = updateObject(controls, {
      [valueType]: event.target.value,
      valid: this.checkValidity(event.target.value, controls.validation),
      touched: true,
    });

    let formIsValid = true;

    listingControls[key] = updatedControls;
    for (const control in listingControls) {
      formIsValid = listingControls[control].valid && formIsValid;
    }
    this.setState({ listingControls, formIsValid });
  }

  render() {
    const { listingControls } = this.state;
    const formElementsArray = [];

    for (const key in listingControls) {
      formElementsArray.push({
        id: key,
        config: listingControls[key],
      });
    }

    const form = formElementsArray.map(({ id, config }) => {
      const {
        elementType,
        elementConfig,
        value,
        valid,
        validation,
        touched,
        label,
      } = config;

      return (
        <FormElement key={id}>
          <ListingInputContainer>
            <div>
              {label}
            </div>
            <ListingInput
                // autocomplete={formElement.config.elementConfig.autocomplete || ''}
                // className="ListingInput"
              elementType={elementType}
              elementConfig={elementConfig}
              value={value}
              invalid={!valid}
              shouldValidate={validation}
              touched={touched}
              onChange={(event) => this.inputChangedHandler(event, id)}
            />
            {/* {attribute} */}
          </ListingInputContainer>
        </FormElement>
      );
    });


    return (
      <Wrapper>
        <Form
          onSubmit={this.submitListingHandler}
        >
          {form}
          {/* {transformedAttributes} */}
          <button>
            add element
          </button>
          <div>
            <button>
              SUBMIT NEW COCKTAIL
            </button>
          </div>
        </Form>
      </Wrapper>
    );
  }
}

ListingForm.propTypes = {
  submitListing: PropTypes.func.isRequired,
};

export default ListingForm;
