import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { HouseList, ListingForm } from 'components/HouseHunt';
import { fetchListings } from 'store/actions';
import shortid from 'shortid';

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.palette.houseHunt.background};;
  justify-content: center;
  margin-top: 8rem;
  padding: 10rem 0%;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const SortBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 10rem;
  background-color: ${({ theme }) => theme.palette.primary[1]};
  justify-content: space-between;
  z-index: 9999;
  flex-direction: row;
  padding: 0 10rem;
`;

const SortingOptions = styled.div`
  flex-direction: row;

  > :not(:first-child) {
    margin-left: 5rem;
  }
`;

const AddListing = styled.div`
  height: 3rem;
  padding: 1rem 2rem;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 4px 4px black;
  transition: .2s all ease-out;

  :hover {
    transform: scale(1.1) translateY(-.4rem);
    cursor: pointer;
  }
`;

const sortOptions = [
  'location',
  'rent',
  'deposit',
  'br',
  'sqft',
  'viewed',
];

class HouseHunt extends Component {
  state = {
    sortBy: 'rent',
    sortUp: true,
  }

  componentDidMount() {
    const { onFetchHousingTest } = this.props;

    onFetchHousingTest();
  }

  sortChangeHandler = (event) => {
    this.setState({ sortBy: event.target.value });
  }

  sortDirectionHandler = (event) => {
    this.setState({ sortUp: event.target.value === 'true' });
  }

  render() {
    const { sortBy, sortUp } = this.state;
    const { error, test, loading } = this.props;
    console.log('[HouseHunt] shortid.generate(): ', shortid.generate());
    const options = sortOptions.map((option) => (
      <option key={option}>{option}</option>
    ));

    return (
      <>
        <Wrapper>
          <SortBar>
            <SortingOptions>
              <select
                onChange={this.sortChangeHandler}
              >
                <option hidden>-- select a sorting option --</option>
                {options}
              </select>
              <select
                onChange={this.sortDirectionHandler}
              >
                <option value>Low to High</option>
                <option value={false}>High to Low</option>
              </select>
            </SortingOptions>
            <AddListing
              onClick={null}
            >
              + add listing
            </AddListing>
          </SortBar>
          <HouseList
            sortBy={sortBy}
            sortUp={sortUp}
          />
        </Wrapper>
        <ListingForm />
      </>
    );
  }
}

HouseHunt.propTypes = {
  uid: PropTypes.number,
};

HouseHunt.defaultProps = {
  uid: null,
};

const mapStateToProps = ({ auth, housing }) => {
  const { uid } = auth;
  const { test, error, loading } = housing;

  return {
    uid,
    test,
    error,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFetchHousingTest: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseHunt);
