const resolverObject = {
  Query: {
    users: () => [
      { firstName: "Yohan", lastName: "Ben Alouane" },
      { firstName: "Rad1", lastName: "Ben Alouane" },
      { firstName: "Saber", lastName: "Ben Alouane" }
    ]
  }
};

export default resolverObject;
