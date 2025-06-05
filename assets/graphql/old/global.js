import gql from "graphql-tag";

export const idFragment = gql`
  fragment idFragment on HomeRecord {
    id
  }
`;

export const linkFragment = gql`
  fragment LinkFragment on CallToActionRecord {
    buttons {
      label
      internal {
        ... on HomeRecord {
          title
        }
        ... on PostRecord {
          __typename
          slug
        }
        ... on ProductRecord {
          __typename
          slug
        }
      }
      external
      style
    }
  }
`;
export const heroFragment = gql`
  fragment HeroFragment on HeroRecord {
    headline
    intro
    cta {
      ...LinkFragment
    }
    image {
      url
    }
  }
`;
export const headerFragment = gql`
  fragment HeaderFragment on SectionHeaderRecord {
    eyebrow
    headline
    intro
    cta {
      ...LinkFragment
    }
  }
`;
export const footerFragment = gql`
  fragment FooterFragment on FooterBannerRecord {
    headline
    intro
    cta {
      ...LinkFragment
    }
  }
`;
