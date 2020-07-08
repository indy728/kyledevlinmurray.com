import React from 'react';
import styled from 'styled-components';
import { ImageShape } from 'components/UI';
import { device } from 'themes/media';
import { socialMedia } from 'themes/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin, faGithub, faTwitch, faSoundcloud,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  flex-direction: row;
  justify-content: center;
  padding: 1.6rem 0;
  width: 90%;

  a:not(:first-child) {
    margin-left: 1rem;
  }

  @media ${device.sm} {
  }

  @media ${device.md} {

  }

  @media ${device.lg} {
  }

  @media ${device.xl} {}
`;

const SocialMediaButton = styled(ImageShape)`
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ colorCode }) => colorCode};
  width: 5rem;
  height: 5rem;
  justify-content: center;
  margin: 0 .2rem;
  transition: ${({ theme }) => theme.transition.shrink};
  animation: moveInTop 1.1s linear;
  animation-delay: ${({ delay }) => `${delay}ms`};

  :hover {
    transform: ${({ theme }) => theme.transform.grow};
    transition: ${({ theme }) => theme.transition.grow};
  }

  svg {
    transform: scale(1.4);
  }
`;

const socialMediaLinks = [
  {
    name: 'LinkedIn', url: 'http://www.linkedin.com/in/kyledevlinmurray', icon: faLinkedin, colorCode: socialMedia.linkedIn,
  },
  {
    name: 'GitHub', url: 'http://github.com/indy728', icon: faGithub, colorCode: socialMedia.github,
  },
  {
    name: 'SoundCloud', url: 'http://soundcloud.com/mucho-carne', icon: faSoundcloud, colorCode: socialMedia.soundCloud,
  },
  {
    name: 'Twitch', url: 'http://twitch.tv/muchocarne', icon: faTwitch, colorCode: socialMedia.twitch,
  },
  {
    name: 'Email', url: 'mailto:kdevlinmurray@gmail.com', icon: faEnvelope, colorCode: socialMedia.google,
  },
];


const footerSocial = () => {
  const socialMediaButtons = socialMediaLinks.map((socialMediaLink, i) => {
    const icon = <FontAwesomeIcon icon={socialMediaLink.icon} size="lg" />;

    return (
      <a href={socialMediaLink.url} key={socialMediaLink.name}>
        <SocialMediaButton
          className="social-media-button"
          name={socialMediaLink.name}
          url={socialMediaLink.url}
          colorCode={socialMediaLink.colorCode}
          customTag={icon}
          shape="circle"
          delay={i * 150}
        />
      </a>

    );
  });

  return (
    <Wrapper>
      {socialMediaButtons}
    </Wrapper>
  );
};

export default footerSocial;
