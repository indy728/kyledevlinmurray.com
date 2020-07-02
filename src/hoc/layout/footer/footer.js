import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from 'themes/media';
import {
  FooterLinks, FooterSocial, FooterContact, FooterWeather,
} from 'components/Footer';
import { Row } from 'components/Containers';
import AdminLogin from 'components/Admin/AdminLogin';

const Wrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary[0]};
  padding: ${({ theme }) => theme.padding.containerXS};
  * {
    color: ${({ theme }) => theme.palette.font.primary};
  }

  @media ${device.sm} {
    padding: ${({ theme }) => theme.padding.containerSM};
  }

  @media ${device.md} {
    padding: ${({ theme }) => theme.padding.containerMD};
  }

  @media ${device.lg} {
    padding: ${({ theme }) => theme.padding.containerLG};
  }

  @media ${device.xl} {
    padding: ${({ theme }) => theme.padding.containerXL};
  }
`;

const FooterTable = styled(Row)`
  padding: 0 3.5rem;
  align-items: normal;
  justify-content: center;

  @media ${device.sm} {
    flex-direction: row;
    padding: 0;
  }

  @media ${device.md} {
  }

  @media ${device.lg} {
  }
  
  > div {
    flex: 1;
    padding: 2rem 3rem;


    @media ${device.sm} {
      padding: 0 1rem;
    }

    @media ${device.md} {
      padding: 0 3rem;
    }

    @media ${device.lg} {
      padding: 0 5rem;
    }

    @media ${device.xl} {
    }
  }

  > :not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.palette.accent[2]};

    @media ${device.sm} {
      border-top: none;
      border-left: 2px solid ${({ theme }) => theme.palette.accent[2]};
    }
  }

`;

const Copyright = styled(Row)`
`;

const footer = (props) => {
  const { links } = props;

  return (
    <Wrapper id="footer">
      <FooterTable className="footer-row">
        <FooterLinks links={links} />
        <FooterWeather />
        <FooterContact />
      </FooterTable>
      <FooterSocial />
      <Copyright className="copyright-row">
        <p>©2020 @indy728</p>
        <AdminLogin />
      </Copyright>
    </Wrapper>
  );
};

footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
};
footer.defaultProps = {
  links: [],
};

export default footer;
