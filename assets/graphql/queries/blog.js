import gql from "graphql-tag";
import { LinkFragment } from "../fragments/global";

export const blogQuery = gql`
  query ($slug: String) {
    post(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
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
      intro
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
        }
      }
    }
  }
`;
