import gql from "graphql-tag";
import {
  FooterFragment,
  LinkFragment,
  SingleLinkFragment,
} from "../fragments/global";

export const PostFragment = gql`
  fragment PostFragment on PostRecord {
    __typename
    id
    title
    slug
    publishDate
    category {
      id
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
  query ($first: IntType, $skip: IntType, $filter: PostModelFilter) {
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
      footerCallout {
        ...FooterFragment
      }
    }
    _allPostsMeta {
      count
    }
    allPosts(
      first: $first
      skip: $skip
      orderBy: [publishDate_DESC]
      filter: $filter
    ) {
      ...PostFragment
    }
  }
  ${PostFragment}
  ${FooterFragment}
  ${LinkFragment}
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
              alt
            }
            caption
            link {
              ...SingleLinkFragment
            }
          }
          ... on BlogTableRecord {
            id
            __typename
            colLeft
            colRight
            tableRows {
              colLeft
              colRight
            }
            bgColor {
              bgColor
            }
          }
          ... on DownloadRecord {
            id
            __typename
            text
            file {
              url
              filename
            }
          }
          ... on EmbedVideoRecord {
            id
            __typename
            video {
              height
              provider
              providerUid
              thumbnailUrl
              title
              url
              width
            }
          }
        }
      }
    }
    blogLanding {
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${PostFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${SingleLinkFragment}
`;

export const categoryQuery = gql`
  query {
    allCategories(orderBy: name_ASC) {
      name
      slug
      id
    }
  }
`;
