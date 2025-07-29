export default function (obj) {
  if (obj?.external) {
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
      case "WhySubpageRecord":
        return "/why/" + obj.internal.slug;
      case "ProductRecord":
        return "/product/" + obj.internal.slug;
      case "BookDemoRecord":
        return "/demo";
      case "BlogLandingRecord":
        return "/blog";
      case "AboutRecord":
        return "/about";
      case "LeadershipRecord":
        return "/about/leadership";
      case "MediaCollectionRecord":
        return "/media/" + obj.internal.tag.slug;
      case "LegalRecord":
        return "/legal/" + obj.internal.slug;
      case "NewsCollectionRecord":
        return "/news/" + obj.internal.tag.slug;
      default:
        break;
    }
  }
}
