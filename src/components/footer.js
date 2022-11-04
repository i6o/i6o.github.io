import React from 'react';
import Container from './container';
import styled from 'styled-components';
import SocialLinks from './social-links';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <SocialLinks />
        <FooterAttribution>
          Copyright 2022 i6o Oy{' - '}
          <a href="https://i6o.fi">https://i6o.fi</a>
        </FooterAttribution>
      </FooterWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding-top: var(--size-300);
  padding-bottom: var(--size-300);
`;

const FooterAttribution = styled.p`
  font-size: var(--size-300);

  & a {
    color: inherit;
  }
`;

const FooterWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
