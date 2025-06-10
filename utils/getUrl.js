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
        return "/why/client-success";
      case "WhySubpageRecord":
        return "/why/" + obj.internal.slug;
      case "ProductRecord":
        return "/product/" + obj.internal.slug;
      case "BookDemoRecord":
        return "/demo";

      default:
        break;
    }
  }
}
