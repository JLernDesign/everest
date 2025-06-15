import gql from "graphql-tag";

const per_page = 12;
const skip = 0;

const PostFragment = gql`
  fragment PostFragment on PostRecord {
    __typename
    id
    title
    slug
    publishDate
    tag {
      name
      slug
    }
    author {
      name
      photo {
        url
      }
    }
    image {
      responsiveImage(imgixParams: { fit: fillmax, w: 1400, h: 1050 }) {
        src
        width
        height
        alt
        base64
      }
    }
    accentColor {
      bgColor
    }
    intro
  }
`;

export const blogQuery = gql`
  query ($first: IntType, $skip: IntType) {
    blogLanding {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      title
      description
      textTicker {
        text
      }
      featuredPosts {
        ...PostFragment
      }
    }
    _allPostsMeta {
      count
    }
    allPosts(first: $first, skip: $skip, orderBy: [publishDate_DESC]) {
      ...PostFragment
    }
  }
  ${PostFragment}
`;

export const postQuery = gql`
  query ($slug: String) {
    post(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      ...PostFragment
      content {
        value
        blocks {
          __typename
          ... on RecordInterface {
            __typename
          }
          ... on BlogQuoteRecord {
            id
            __typename
            text
          }
          ... on BlogImageRecord {
            id
            __typename
            image {
              url
            }
            caption
          }
        }
      }
    }
  }
  ${PostFragment}
`;
