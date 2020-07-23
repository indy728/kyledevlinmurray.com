/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { device } from 'themes/media';
import { Input } from 'components/UI';
import { updateObject } from 'shared/objectUtility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Form } from './components';

const Wrapper = styled.div`
  width: 50rem;
  max-width: 90%;
  height: 95vh;
  padding: 2rem .5rem;
  background-color: white;
  position: relative;


`;

const ScrollWrapper = styled.div`
  overflow: auto;
  width: 100%;
`;

const CloseButton = styled.div`
  position: absolute;
  font-size: 2rem;
  font-weight: bold;
  top: 1.5rem;
  left: 1.5rem;
  cursor: pointer;
  transition: .1s all ease-out;

  :hover {
    transform: scale(1.1);
  }

  * {
    color: ${({ theme }) => theme.palette.complement[1]};;
  }
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
        elementType: 'select',
        elementConfig: {
          options: [
            'Berkeley',
            'Berkeley: Elmwood',
            'Berkeley: Ashby',
            'Berkeley: North Berkeley',
            'Oakland',
            'Oakland: West Oakland/Emeryville',
            'Oakland: Temescal',
            'Oakland: Downtown',
            'Oakland: Rockridge/Claremont',
            'Oakland: Bushrod',
          ],
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
      laundry: {
        label: 'laundry',
        elementType: 'select',
        elementConfig: {
          options: [
            'in unit',
            'shared',
            'no laundry',
          ],
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
        elementType: 'select',
        elementConfig: {
          options: [
            'garage - included',
            'garage - fee',
            'off street',
            'street only',
          ],
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
          options: ['yes', 'no'],
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      dateAvailable: {
        label: 'date available',
        elementType: 'date',
        elementConfig: {
          type: 'text',
          placeholder: '',
          autocomplete: '',
        },
        value: new Date(2020, 7, 1),
        validation: {
          required: false,
        },
        valid: false,
        touched: false,
      },
    },
    contactControls: {
      name: {
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
      company: {
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
      phone: {
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
      email: {
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
      status: {
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

  submitListingHandler = (event) => {
    event.preventDefault();

    const { listingControls, contactControls } = this.state;
    const id = shortid.generate();
    const listing = {
      id,
      details: {},
      contact: {},
    };
    const listingKeys = Object.keys(listingControls);
    const contactKeys = Object.keys(contactControls);

    listingKeys.forEach((key) => { listing.details[key] = listingControls[key].value; });
    contactKeys.forEach((key) => { listing.contact[key] = contactControls[key].value; });

    console.log(listing);
  }

  render() {
    const { listingControls, contactControls, formIsValid } = this.state;
    const { close } = this.props;

    return (
      <Wrapper>
        <CloseButton
          onClick={close}
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </CloseButton>
        <ScrollWrapper>
          <Form
            listingControls={listingControls}
            contactControls={contactControls}
            close={close}
            submitListing={this.submitListingHandler}
            formIsValid={formIsValid}
            inputChanged={this.inputChangedHandler}
          />
        </ScrollWrapper>
      </Wrapper>
    );
  }
}

ListingForm.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ListingForm;
