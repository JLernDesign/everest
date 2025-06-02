export const heroFragment = gql`
  fragment pageHero on Page {
    pageHero {
      headline
      intro
      cta {
        button {
          url
          title
          target
        }
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`;
