import React from 'react';
import styled from 'styled-components';
import { device } from 'themes/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`

  @media ${device.sm} {
      align-items: flex-end;
  }

  @media ${device.lg} {}

  @media ${device.xl} {}

  address {
    text-align: center;
    line-height: 2rem;

    @media ${device.sm} {
      align-items: flex-end;
      text-align: right;
    }
  }  

`;

const ContactMethod = styled.div`
  flex-direction: row;

  
`;

const footerContact = () => (
  <Wrapper>
    <address>
      San Francisco, California
      <br />
      USA
      <ContactMethod>
        <FontAwesomeIcon icon={faMobileAlt} />
        : 805 459 0041
      </ContactMethod>
      <ContactMethod>
        <FontAwesomeIcon icon={faEnvelope} />
        :
        <a href="mailto:kdevlinmurray@gmail.com">kdevlinmurray@gmail.com</a>
      </ContactMethod>
    </address>
  </Wrapper>
);

export default footerContact;
