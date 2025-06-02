export const HomeQuery = gql`
  fragment Home on Page {
    home {
      hero {
        headline
        intro
        cta {
          buttons {
            label
            internal
            external
            style
          }
        }
      }
      intro {
        headline
        intro
        cta {
          buttons {
            label
            internal
            external
            style
          }
        }
      }
    }
  }
`;
