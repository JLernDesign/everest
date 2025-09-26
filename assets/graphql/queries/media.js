import gql from "graphql-tag";
import {
  FooterFragment,
  HeroFragment,
  LinkFragment,
  ResponsiveImageFragment,
  VideoFragment,
  MediaPostFragment,
} from "../fragments/global";

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
  }
  ${HeroFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${ResponsiveImageFragment}
`;

export const mediaPostsQuery = gql`
  query ($tagId: ItemId!) {
    allMediaPosts(
      filter: { tag: { eq: $tagId } }
      first: 100
      orderBy: publishDate_DESC
    ) {
      ...MediaPostFragment
    }
  }
  ${ResponsiveImageFragment}
  ${VideoFragment}
  ${MediaPostFragment}
`;

export const mediaPostQuery = gql`
  query ($slug: String) {
    mediaPost(filter: { slug: { eq: $slug } }) {
      ...MediaPostFragment
    }
    mediaPage {
      footerCallout {
        ...FooterFragment
      }
    }
  }
  ${FooterFragment}
  ${LinkFragment}
  ${ResponsiveImageFragment}
  ${VideoFragment}
  ${MediaPostFragment}
`;
