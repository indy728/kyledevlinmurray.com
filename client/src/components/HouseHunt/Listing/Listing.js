import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';

const Wrapper = styled.div`
  align-items: flex-start;
  border: 1px solid black;
  width: 32rem;
  padding: 2rem 2rem 5rem 2rem;
  box-shadow: -2rem 2rem ${({ theme }) => theme.palette.houseHunt.boxShadow};
  background-color: white;
  position: relative;

  > div {
    width: 100%;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  &:not(:first-child) {
    margin-top: 5rem;
  }

  @media ${device.md} {
    width: 72rem;
  }
`;

const Expand = styled.div`
  width: 100%;
  border: 3px outset grey;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const TitleWebsite = styled.div`
  a:link {
    text-decoration: none;
  }

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  font-weight: 600;

  @media ${device.md} {
    font-size: 2.4rem;
    width: 50rem;
  }
`;

const ListingRow = styled.div`

  @media ${device.md} {
    flex-direction: row;

    > div:not(:first-child) {
      margin-left: 4rem;
    }
  }
`;

const Website = styled.div`
  background-color: dodgerblue;
  cursor: pointer;
  transition: .2s all ease-out;
  padding: .5rem 2rem;
  border-radius: 2px;
  color: white;

  :hover {
    transform: scale(1.1) translateY(-.5rem);
  }
`;

const ProsCons = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  :not(:first-child) {
    margin-top: 3rem;
  }

  @media ${device.md} {
    width: 63rem;
    align-items: flex-start;
    border: 1px inset grey;
    padding: 1rem 2rem;

    > div {
      margin-left: 3rem;
      text-transform: uppercase;
      font-size: 1.4rem;
      height: 2rem;
    }
  }
`;

const ExpandedDetails = styled.div`
  width: 100%;
`;

// const ListingRow = styled.div`
//   flex-direction: row;
//   justify-content: space-evenly;
// `;

class Listing extends Component {
  state = {
    expand: false,
  }

  expandToggleHandler = () => {
    this.setState((prevState) => ({ expand: !prevState.expand }));
  }

  render() {
    const { details } = this.props;
    const { expand } = this.state;
    let expandedDetails = null;

    if (expand) {
      const pros = details.pros.map((pro) => (
        <div key={pro}>
          {`• ${pro}`}
        </div>
      ));
      const cons = details.cons.map((con) => (
        <div key={con}>
          {`• ${con}`}
        </div>
      ));

      const { contact } = details;

      expandedDetails = (
        <ExpandedDetails>
          <ProsCons>
            <h3>
              Pros:
            </h3>
            {pros}
          </ProsCons>
          <ProsCons>
            <h3>
              Cons:
            </h3>
            {cons}
          </ProsCons>
          <div>
            Contact:
            <div>
              {`Name: ${contact.name}`}
            </div>
            <div>
              {`Company: ${contact.company}`}
            </div>
            <div>
              {`Number: ${contact.number}`}
            </div>
            <div>
              {`Email: ${contact.email}`}
            </div>
          </div>
          <ListingRow>
            <div>
              {`Status: ${contact.status}`}
            </div>
            <div>
              {`Viewed: ${details.viewed ? 'yes' : 'no'}`}
            </div>
          </ListingRow>
        </ExpandedDetails>
      );
    }

    return (
      <Wrapper>
        <TitleWebsite>
          <Title>
            {details.title}
          </Title>
          <a href={details.link} target="_blank">
            <Website>
              Website
            </Website>
          </a>
        </TitleWebsite>
        <ListingRow>
          <div>
            Location:
            {' '}
            {details.location}
          </div>
          <div>
            {`${details.sqft === -1 ? 'N/A' : details.sqft} sq ft`}
          </div>
          <div>
            {`${details.br} bedroom${details.br > 1 ? 's' : ''}`}
          </div>
        </ListingRow>
        <ListingRow>
          <div>
            {`Rent: $${details.rent}`}
          </div>
          <div>
            {`Deposit: $${details.deposit === -1 ? 'N/A' : details.deposit}`}
          </div>
          <div>
            {`Move in total: $${details.deposit === -1 ? `${details.rent} + unknown deposit` : details.rent + details.deposit}`}
          </div>
        </ListingRow>
        <ListingRow>
          <div>{`Laundry: ${details.laundry}`}</div>
          <div>{`Parking: ${details.parking}`}</div>
        </ListingRow>
        {expandedDetails}
        <Expand
          onClick={this.expandToggleHandler}
        >
          {expand ? 'collapse' : 'expand'}
        </Expand>
      </Wrapper>
    );
  }
}

Listing.propTypes = {
  details: PropTypes.shape({}).isRequired,
};

export default Listing;
