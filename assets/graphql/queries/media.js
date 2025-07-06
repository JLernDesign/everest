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
          externalLink
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
