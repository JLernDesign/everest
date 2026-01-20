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
      headline
      tag {
        slug
      }
      showCallout
      featuredVideo{
        post{
          ... on MediaPostRecord {
            id
            slug
            title
            intro
            publishDate
            tag{
              slug
            }
            media{
            ... on ProductDemoRecord{
              __typename
              screen{
                ...ResponsiveImageFragment
              }
              video{
                ...VideoFragment
              }
            }
          }
          }
        }
      }
      demoDate
      signupForm{
        headline
        intro
        hubspotId
      }
    }
  }
  ${HeroFragment}
  ${FooterFragment}
  ${LinkFragment}
  ${ResponsiveImageFragment}
  ${VideoFragment}
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
  ${LinkFragment}
`;

export const mediaPostQuery = gql`
  query ($slug: String) {
    mediaPost(filter: { slug: { eq: $slug } }) {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
      ...MediaPostFragment
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
