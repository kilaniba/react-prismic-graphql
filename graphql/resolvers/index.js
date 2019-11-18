import Prismic from "prismic-javascript";
import PrismicConfig from "../../src/prismic-configuration";

const resolverObject = {
  Query: {
    testPage: async () => {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint);
      const data = await api.getByUID("test", "testuid").then(res => res.data);

      return [
        {
          title: data.title,
          description: data.description,
          image: data.image
        }
      ];
    }
  }
};

export default resolverObject;
