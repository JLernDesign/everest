import gql from "graphql-tag";
import {
  FooterFragment,
  HeroFragment,
  LinkFragment,
  ResponsiveImageFragment,
  VideoFragment,
} from "../fragments/global";

export const mediaQuery = gql`
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
      items {
        mediaGroup {
          title
          publishDate
          tag {
            name
          }
          description
          thumbnail {
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
