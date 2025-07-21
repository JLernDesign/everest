import gql from "graphql-tag";
import {
  FooterFragment,
  HeroFragment,
  LinkFragment,
  ResponsiveImageFragment,
  VideoFragment,
  MediaPostFragment,
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
      tag {
        slug
      }
    }
    allMediaPosts(first: 100, orderBy: publishDate_DESC) {
      ...MediaPostFragment
    }
  }
  ${HeroFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${ResponsiveImageFragment}
  ${VideoFragment}
  ${MediaPostFragment}
`;
