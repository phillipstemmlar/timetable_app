const UserReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { name: action.payload };
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

export default UserReducer;
