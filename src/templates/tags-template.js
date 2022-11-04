import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import StyledLink from '../components/styled-link';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

function TotalCount(props) {
  let message = "";
  if (props.count === 1) {
    message =  " julkaisu avainsanalla ";
  } else {
    message = " julkaisua avainsanalla ";
  }
  return props.count + message + '"' + props.tag + '"'
}

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const posts = data.allMarkdownRemark.nodes;
  const title = `Julkaisut avainsanalla ${tag}`;

  return (
    <Layout title={title}>
      <TagsTemplateWrapper>
        {totalCount === 1 &&
        <Title>
          <TotalCount count = {totalCount} tag={tag} />
        </Title> }
        <Link
          css={`
            margin-top: var(--size-400);
            display: inline-block;
            color: inherit;
            text-transform: uppercase;
          `}
          to="/tags"
        >
          näytä kakki avainsanat
        </Link>
        <PostList posts={posts} />

        <StyledLink
          css={`
            margin-top: var(--size-400);
            display: inline-block;
          `}
          to="/tags"
        >
          Näytä kaikki avainsanat
        </StyledLink>
      </TagsTemplateWrapper>
    </Layout>
  );
};

export default TagsTemplate;

const TagsTemplateWrapper = styled.div`
  padding-top: var(--size-900);
`;

const Title = styled.h1`
  font-size: var(--size-700);
`;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { contentType: { eq: "posts" } }
      }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD.MM.YYYY")
          description
          author
          tags
          title
        }
        timeToRead
        excerpt
      }
    }
  }
`;
