export const createUser = `{
  mutation createUser($input: UserInput) {
    createUser(user: $input) {
      id
    }
  }
}
`;
