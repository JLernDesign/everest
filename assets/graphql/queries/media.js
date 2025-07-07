import gql from "graphql-tag";
import {
  FooterFragment,
  HeroFragment,
  LinkFragment,
  ResponsiveImageFragment,
  VideoFragment,
} from "../fragments/global";

export const mediaCollectionQuery = gql`
  query ($slug: String) {
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
    mediaCollection(filter: { slug: { eq: $slug } }) {
      title
      slug
      items {
        mediaGroup {
          ... on ProductDemoRecord {
            __typename
            title
            publishDate
            tag {
              name
            }
            intro
            screen {
              ...ResponsiveImageFragment
            }
            video {
              ...VideoFragment
            }
          }
          ... on MediaVideoRecord {
            __typename
            title
            publishDate
            tag {
              name
            }
            intro
            image {
              ...ResponsiveImageFragment
            }
            video {
              ...VideoFragment
            }
          }
          ... on PodcastRecord {
            __typename
            title
            publishDate
            tag {
              name
            }
            intro
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
            title
            publishDate
            tag {
              name
            }
            intro
            bgColor
            document {
              url
            }
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
