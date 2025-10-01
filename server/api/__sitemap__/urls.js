const runtimeConfig = useRuntimeConfig();
const ROUTES_QUERY = `
  query {
    allProducts(first: 100) {
      slug
      _updatedAt
    }
    allPosts(first: 100) {
      slug
      _updatedAt
    }
    _allPostsMeta {
      count
    }
    allWhySubpages(first: 100) {
      slug
      _updatedAt
    }
    allLegals(first: 100) {
      slug
      _updatedAt
    }
    allCaseStudies(first: 100) {
      slug
      _updatedAt
    }
    allMediaCollections(first: 100) {
      tag {
        slug
      }
    }
    allNewsCollections(first: 100) {
      tag {
        slug
      }
    }
  }
`;

export default defineSitemapEventHandler(async (event) => {
  let dynamicRoutes = [];

  await fetch("https://graphql.datocms.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${runtimeConfig.public.datoCmsToken}`,
    },
    body: JSON.stringify({
      query: ROUTES_QUERY,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      //console.log(res.data);

      const posts = res.data.allPosts;
      const totalPosts = res.data._allPostsMeta.count;
      const postsPerPage = 12;
      const products = res.data.allProducts;
      const whySubpages = res.data.allWhySubpages;
      const legals = res.data.allLegals;
      const caseStudies = res.data.allCaseStudies;
      const mediaCollections = res.data.allMediaCollections;
      const newsCollections = res.data.allNewsCollections;

      products.forEach((product) => {
        dynamicRoutes.push({
          loc: `/product/${product.slug}`,
          lastmod: product._updatedAt,
        });
      });
      posts.forEach((post) => {
        dynamicRoutes.push({
          loc: `/blog/${post.slug}`,
          lastmod: post._updatedAt,
        });
      });
      for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        dynamicRoutes.push({
          loc: `/blog/page/${i}`,
          lastmod: new Date(),
        });
      }
      whySubpages.forEach((whySubpage) => {
        dynamicRoutes.push({
          loc: `/why/${whySubpage.slug}`,
          lastmod: whySubpage._updatedAt,
        });
      });
      legals.forEach((legal) => {
        dynamicRoutes.push({
          loc: `/legal/${legal.slug}`,
          lastmod: legal._updatedAt,
        });
      });
      caseStudies.forEach((caseStudy) => {
        dynamicRoutes.push({
          loc: `/case-studies/${caseStudy.slug}`,
          lastmod: caseStudy._updatedAt,
        });
      });
      mediaCollections.forEach((mediaCollection) => {
        dynamicRoutes.push({
          loc: `/media/${mediaCollection.tag.slug}`,
          lastmod: mediaCollection._updatedAt,
        });
      });
      newsCollections.forEach((newsCollection) => {
        dynamicRoutes.push({
          loc: `/news/${newsCollection.tag.slug}`,
          lastmod: newsCollection._updatedAt,
        });
      });
    });

  // Combine with static routes if needed
  const staticRoutes = [
    { loc: "/", changefreq: "daily", priority: 1.0 },
    { loc: "/about", changefreq: "monthly", priority: 0.5 },
    { loc: "/blog", changefreq: "weekly", priority: 0.7 },
    { loc: "/case-studies", changefreq: "monthly", priority: 0.7 },
    { loc: "/client-success", changefreq: "monthly", priority: 0.7 },
    { loc: "/demo", changefreq: "monthly", priority: 0.7 },
    { loc: "/search", changefreq: "monthly", priority: 0.5 },
    { loc: "/why", changefreq: "monthly", priority: 0.7 },
    { loc: "/about/leadership", changefreq: "monthly", priority: 0.5 },
    { loc: "/news/collaborations", changefreq: "monthly", priority: 0.5 },
    { loc: "/news/press", changefreq: "monthly", priority: 0.5 },
    { loc: "/why/ai-first", changefreq: "monthly", priority: 0.5 },
  ];

  // Return all routes for sitemap generation
  return [...staticRoutes, ...dynamicRoutes];
});
