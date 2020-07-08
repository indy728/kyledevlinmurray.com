import React from 'react';
import styled from 'styled-components';
import { device } from 'themes/media';

const Wrapper = styled.main`
  width: 100%;
  min-height: inherit;
  padding: 2rem 5rem;

  @media ${device.sm} {}

  @media ${device.md} {}

  @media ${device.lg} {}

  @media ${device.xl} {}
`;

const MainSection = styled.section`
  width: 100%;
  align-items: flex-start;

  &:not(:first-child) {
    margin-top: 4rem;
  }

  hr {
    width: 100%;
    margin: .2rem 0 2rem 0;
  }

`;

const MainArticle = styled.article`
  width: 100%;
`;

const MainArticleParagraph = styled.p`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

`;

const main = () => (
  <Wrapper>
    <MainSection id="section1">
      <h1>Section 1</h1>
      <hr />
      <MainArticle>
        <MainArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dui vel elit pulvinar molestie vitae at elit. Mauris tellus turpis, aliquet eu venenatis nec, volutpat eget ante. In ut efficitur purus. Maecenas elementum hendrerit massa eget consequat. Sed vitae elementum massa. Maecenas fringilla risus quis neque ullamcorper elementum nec in dolor. Pellentesque sodales venenatis sapien, quis suscipit enim sollicitudin varius. Praesent faucibus nibh sit amet diam accumsan, quis tempor tortor feugiat. Aliquam eu luctus velit, commodo pretium lectus. Etiam nec condimentum diam. Nulla tincidunt imperdiet porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus cursus vestibulum. Praesent congue tortor arcu, at semper tortor tincidunt id.
        </MainArticleParagraph>
        <MainArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dui vel elit pulvinar molestie vitae at elit. Mauris tellus turpis, aliquet eu venenatis nec, volutpat eget ante. In ut efficitur purus. Maecenas elementum hendrerit massa eget consequat. Sed vitae elementum massa. Maecenas fringilla risus quis neque ullamcorper elementum nec in dolor. Pellentesque sodales venenatis sapien, quis suscipit enim sollicitudin varius. Praesent faucibus nibh sit amet diam accumsan, quis tempor tortor feugiat. Aliquam eu luctus velit, commodo pretium lectus. Etiam nec condimentum diam. Nulla tincidunt imperdiet porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus cursus vestibulum. Praesent congue tortor arcu, at semper tortor tincidunt id.
        </MainArticleParagraph>
      </MainArticle>
    </MainSection>
    <MainSection id="section2">
      <h1>Section 2</h1>
      <hr />
      <MainArticle>
        <MainArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dui vel elit pulvinar molestie vitae at elit. Mauris tellus turpis, aliquet eu venenatis nec, volutpat eget ante. In ut efficitur purus. Maecenas elementum hendrerit massa eget consequat. Sed vitae elementum massa. Maecenas fringilla risus quis neque ullamcorper elementum nec in dolor. Pellentesque sodales venenatis sapien, quis suscipit enim sollicitudin varius. Praesent faucibus nibh sit amet diam accumsan, quis tempor tortor feugiat. Aliquam eu luctus velit, commodo pretium lectus. Etiam nec condimentum diam. Nulla tincidunt imperdiet porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus cursus vestibulum. Praesent congue tortor arcu, at semper tortor tincidunt id.
        </MainArticleParagraph>
        <MainArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dui vel elit pulvinar molestie vitae at elit. Mauris tellus turpis, aliquet eu venenatis nec, volutpat eget ante. In ut efficitur purus. Maecenas elementum hendrerit massa eget consequat. Sed vitae elementum massa. Maecenas fringilla risus quis neque ullamcorper elementum nec in dolor. Pellentesque sodales venenatis sapien, quis suscipit enim sollicitudin varius. Praesent faucibus nibh sit amet diam accumsan, quis tempor tortor feugiat. Aliquam eu luctus velit, commodo pretium lectus. Etiam nec condimentum diam. Nulla tincidunt imperdiet porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus cursus vestibulum. Praesent congue tortor arcu, at semper tortor tincidunt id.
        </MainArticleParagraph>
      </MainArticle>
    </MainSection>
    <MainSection id="section3">
      <h1>Section 3</h1>
      <hr />
      <MainArticle>
        <MainArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dui vel elit pulvinar molestie vitae at elit. Mauris tellus turpis, aliquet eu venenatis nec, volutpat eget ante. In ut efficitur purus. Maecenas elementum hendrerit massa eget consequat. Sed vitae elementum massa. Maecenas fringilla risus quis neque ullamcorper elementum nec in dolor. Pellentesque sodales venenatis sapien, quis suscipit enim sollicitudin varius. Praesent faucibus nibh sit amet diam accumsan, quis tempor tortor feugiat. Aliquam eu luctus velit, commodo pretium lectus. Etiam nec condimentum diam. Nulla tincidunt imperdiet porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus cursus vestibulum. Praesent congue tortor arcu, at semper tortor tincidunt id.
        </MainArticleParagraph>
        <MainArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dui vel elit pulvinar molestie vitae at elit. Mauris tellus turpis, aliquet eu venenatis nec, volutpat eget ante. In ut efficitur purus. Maecenas elementum hendrerit massa eget consequat. Sed vitae elementum massa. Maecenas fringilla risus quis neque ullamcorper elementum nec in dolor. Pellentesque sodales venenatis sapien, quis suscipit enim sollicitudin varius. Praesent faucibus nibh sit amet diam accumsan, quis tempor tortor feugiat. Aliquam eu luctus velit, commodo pretium lectus. Etiam nec condimentum diam. Nulla tincidunt imperdiet porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus cursus vestibulum. Praesent congue tortor arcu, at semper tortor tincidunt id.
        </MainArticleParagraph>
      </MainArticle>
    </MainSection>
    <MainSection id="section4">
      <h1>Section 4</h1>
      <hr />
      <MainArticle>
        <MainArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dui vel elit pulvinar molestie vitae at elit. Mauris tellus turpis, aliquet eu venenatis nec, volutpat eget ante. In ut efficitur purus. Maecenas elementum hendrerit massa eget consequat. Sed vitae elementum massa. Maecenas fringilla risus quis neque ullamcorper elementum nec in dolor. Pellentesque sodales venenatis sapien, quis suscipit enim sollicitudin varius. Praesent faucibus nibh sit amet diam accumsan, quis tempor tortor feugiat. Aliquam eu luctus velit, commodo pretium lectus. Etiam nec condimentum diam. Nulla tincidunt imperdiet porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus cursus vestibulum. Praesent congue tortor arcu, at semper tortor tincidunt id.
        </MainArticleParagraph>
        <MainArticleParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus dui vel elit pulvinar molestie vitae at elit. Mauris tellus turpis, aliquet eu venenatis nec, volutpat eget ante. In ut efficitur purus. Maecenas elementum hendrerit massa eget consequat. Sed vitae elementum massa. Maecenas fringilla risus quis neque ullamcorper elementum nec in dolor. Pellentesque sodales venenatis sapien, quis suscipit enim sollicitudin varius. Praesent faucibus nibh sit amet diam accumsan, quis tempor tortor feugiat. Aliquam eu luctus velit, commodo pretium lectus. Etiam nec condimentum diam. Nulla tincidunt imperdiet porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tempus cursus vestibulum. Praesent congue tortor arcu, at semper tortor tincidunt id.
        </MainArticleParagraph>
      </MainArticle>
    </MainSection>
  </Wrapper>
);

main.propTypes = {
};

export default main;
