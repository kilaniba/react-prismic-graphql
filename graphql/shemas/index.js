const typeDefinition = `
scalar JSON
type Query  {
    testPage: MyPage
}
type MyPage {
    title:JSON
    description:JSON
    image:JSON
}
`;

export default typeDefinition;
