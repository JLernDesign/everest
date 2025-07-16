import gql from "graphql-tag";
import {
  FooterFragment,
  HeroFragment,
  LinkFragment,
  ResponsiveImageFragment,
} from "../fragments/global";

export const newsCollectionQuery = gql`
  query {
    newsPage {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      hero {
        ...HeroFragment
      }
      footerCallout {
        ...FooterFragment
      }
    }
    allNewsCollections(orderBy: order_ASC) {
      title
      tag {
        slug
      }
    }
    allNewsPosts(orderBy: publishDate_DESC) {
      __typename
      title
      slug
      publishDate
      tag {
        name
        slug
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
      logo {
        url
      }
      accentColor {
        bgColor
      }
      intro
      externalLink
    }
  }
  ${HeroFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${ResponsiveImageFragment}
`;

export const newsPostQuery = gql`
  query ($slug: String) {
    newsPost(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      __typename
      title
      slug
      publishDate
      tag {
        name
        slug
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
      logo {
        url
      }
      accentColor {
        bgColor
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
    newsPage {
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${FooterFragment}
  ${LinkFragment}
`;
