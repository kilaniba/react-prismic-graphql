const typeDefinition = `
type Query  {
    users: [User]
}
type User {
    firstName:String
    lastName:String
}
`;

export default typeDefinition;
