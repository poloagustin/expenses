function syncUser(user, context, callback) {
  const userId = user.user_id;
  const nickname = user.nickname;

  const admin_secret = configuration.HASURA_ADMIN_SECRET;
  const url = `https://${configuration.HASURA_DOMAIN}/v1/graphql`;
  const upsertUserQuery = `
    mutation($userId: String!, $username: String!){
      insert_users(objects: [{ id: $userId, username: $username }], on_conflict: { constraint: users_pkey, update_columns: username }) {
        affected_rows
        returning {
          id
          username
        }
      }
    }`;
  const graphqlReq = {
    query: upsertUserQuery,
    variables: { userId: userId, username: nickname },
  };

  request.post(
    {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': admin_secret,
      },
      url: url,
      body: JSON.stringify(graphqlReq),
    },
    function (error, response, body) {
      if (error) {
        console.error('Error: ', error);
      }
      console.log('Body:', body);
      callback(null, user, context);
    }
  );
}
