import gql from "graphql-tag";
import {
  FooterFragment,
  HeroFragment,
  LinkFragment,
  ResponsiveImageFragment,
  VideoFragment,
} from "../fragments/global";

export const tagIds = {
  "product-demos": "cg00smj3TbioZKUzVg3s2A",
  video: "fyWxNDPCQeCC5Ue2d3rdtQ",
  podcast: "Ug2zyP8QSZanoBxyhEZ1wA",
  "e-book": "fCd4d2mrSAeBNYqcPSAZCw",
};

export const mediaCollectionQuery = gql`
  query {
    mediaPage {
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
    allMediaCollections(orderBy: order_ASC) {
      title
      slug
    }
    allMediaPosts(orderBy: publishDate_DESC) {
      title
      intro
      publishDate
      tag {
        name
        slug
      }
      media {
        ... on ProductDemoRecord {
          __typename
          screen {
            ...ResponsiveImageFragment
          }
          video {
            ...VideoFragment
          }
        }
        ... on MediaVideoRecord {
          __typename
          image {
            ...ResponsiveImageFragment
          }
          video {
            ...VideoFragment
          }
        }
        ... on PodcastRecord {
          __typename
          bgColor
          person {
            name
            photo {
              url
            }
          }
          externalLink
        }
        ... on EbookRecord {
          __typename
          bgColor
          document {
            url
          }
        }
      }
    }
  }
  ${HeroFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${ResponsiveImageFragment}
  ${VideoFragment}
`;
