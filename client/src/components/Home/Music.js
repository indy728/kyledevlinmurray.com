import React from 'react';
import styled from 'styled-components';
import { device } from 'themes/media';
import { boatDJ } from 'assets/img/jpg';

const Wrapper = styled.div`
  width: 100%;
  min-height: 56rem;
  position: relative;
`;

const MusicBackground = styled.div`
  width: 100%;
  height: 56rem;
  background-image: url(${boatDJ});
  background-position: 70% 0;
  background-size: cover;


  @media ${device.lg} {
    width: 150rem;
    background-position: 0 70%;
    min-height: 80rem;
  }
`;

const PlayerWrapper = styled.div`
  width: 100%;
  padding: 5rem;
  background-color: ${({ theme }) => theme.palette.analog.coolest};
 
  @media ${device.lg} {
    width: 40rem;
    position: absolute;
    border-radius: .5rem;
    bottom: 4rem;
    left: 4rem;
    padding: 2rem;
    overflow: hidden;
    align-items: flex-start;
  }
`;

const Player = styled.div`
  font-size: 10px;
  color: #cccccc;
  line-break: anywhere;
  word-break: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
`;

const PlayerLink = styled.a`
  color: #cccccc;
  text-decoration: none;
`;

const music = () => (
  <Wrapper>
    <MusicBackground />
    <PlayerWrapper>
      <iframe
        title="Indy Soundcloud Latest Track"
        width="100%"
        height="100%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/830695081&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
      />
      <Player>
        <PlayerLink
          href="https://soundcloud.com/mucho-carne/education-01-a-little-something-for-everyone"
          title="Education 01 - It Has A Little Something For Everyone"
          target="_blank"
          rel="noreferrer"
        >
          Education 01 - It Has A Little Something For Everyone
        </PlayerLink>
      </Player>
    </PlayerWrapper>
  </Wrapper>
);

export default music;
