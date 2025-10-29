export default function (obj) {
  if (obj?.external && obj.external !== true) {
    return obj.external;
  }
  if (obj?.internal) {
    //console.log(obj.internal.__typename);

    switch (obj.internal.__typename) {
      case "HomeRecord":
        return "/";
      case "WhyMainRecord":
        return "/why";
      case "AiFirstRecord":
        return "/why/ai-first";
      case "ClientSuccessRecord":
        return "/client-success";
      case "CasestudyLandingRecord":
        return "/case-studies";
      case "CaseStudyRecord":
        return "/case-studies/" + obj.internal.slug;
      case "WhySubpageRecord":
        return "/why/" + obj.internal.slug;
      case "ProductRecord":
        return "/product/" + obj.internal.slug;
      case "BookDemoRecord":
        return "/demo";
      case "BlogLandingRecord":
        return "/blog";
      case "PostRecord":
        return "/blog/" + obj.internal.slug;
      case "AboutRecord":
        return "/about";
      case "LeadershipRecord":
        return "/about/leadership";
      case "MediaCollectionRecord":
        return "/media/" + obj.internal.tag.slug;
      case "MediaPostRecord":
        return "/video/" + obj.internal.slug;
      case "LegalRecord":
        return "/legal/" + obj.internal.slug;
      case "NewsCollectionRecord":
        return "/news/" + obj.internal.tag.slug;

      default:
        break;
    }
  }
}
