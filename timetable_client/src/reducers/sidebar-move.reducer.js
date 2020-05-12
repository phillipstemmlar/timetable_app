const SidebarMoveReducer = (isLeft = false, action) => {
  switch (action.type) {
    case 'LEFT':
      return true;
    case 'RIGHT':
      return false;
    default:
      return isLeft;
  }
};

export default SidebarMoveReducer;
