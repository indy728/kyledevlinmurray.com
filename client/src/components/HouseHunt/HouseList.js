import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import { Listing } from './Listing';

const Wrapper = styled.div`

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const listings = [
  {
    title: 'Charming and friendly Bushrod one bedroom apartment',
    link: 'https://sfbay.craigslist.org/eby/apa/d/oakland-charming-and-friendly-bushrod/7145889987.html',
    location: 'Bushrod',
    rent: 2100,
    deposit: -1,
    br: 1,
    sqft: 600,
    contact: {
      name: 'n/a',
      company: 'n/a',
      number: '510-847-0744',
      email: 'n/a',
      status: 'awaiting response',
    },
    pros: [
      'yard and porch',
    ],
    cons: [
      'can\'t tell if there\'s a living room',
    ],
    laundry: 'on site',
    parking: 'street only',
    viewed: false,
    available: true,
  },
  {
    title: 'Charming 1/1 with Hardwood floors and Great views',
    link: 'https://www.laphamcompany.com/node/10288#lg=1&slide=11',
    location: 'Upper Telegraph',
    rent: 1925,
    deposit: 1925,
    br: 1,
    sqft: -1,
    contact: {
      name: 'Marie',
      company: 'Lapham',
      number: '510-761-9861',
      email: 'n/a',
      status: 'need to contact',
    },
    pros: [
      'possible grass area',
      'possible office space',
      'great location',
      '2 months free w/ 14 month lease',
    ],
    cons: [],
    laundry: 'on site',
    parking: 'street only',
    viewed: false,
    available: true,
  },
];

const HouseList = ({ sortBy, sortUp }) => {
  const sortedListings = listings.sort((a, b) => {
    console.log('[HouseList] a[sortBy]: ', a[sortBy]);
    const type = typeof a[sortBy];

    switch (type) {
      case 'string':
        return sortUp
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      case 'number':
        return sortUp
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy];
      case 'boolean':
        if (sortUp) return a[sortBy] === true && b[sortBy] === false ? 1 : -1;
        return a[sortBy] === false && b[sortBy] === true ? 1 : -1;
      default:
        return 0;
    }

    // const dif =
    // console.log('[HouseList] dif: ', dif);
    // if (dif > 0) return 1;
    // return -1;
  });

  const renderListings = [];

  sortedListings.forEach((listing) => renderListings.push(<Listing key={listing.title} details={listing} />));

  return (
    <Wrapper>
      {renderListings}
    </Wrapper>
  );
};

HouseList.propTypes = {
  sortBy: PropTypes.string.isRequired,
  sortUp: PropTypes.bool.isRequired,
};

export default HouseList;
