export default {
  apiEndpoint: "https://testkilani.prismic.io/api/v2",
  linkResolver(doc) {
    if (doc.type === "page") return `/page/${doc.uid}`;
    return "/";
  }
};
