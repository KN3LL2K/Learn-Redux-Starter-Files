
// a reducer takes in two things

// 1. the action
// 2. copy of current state

function posts(state = [], action) {

  switch(action.type) {
    case 'INCREMENT_LIKES' :
      const i = action.index;
      return [
        ...state.slice(0,i), // everything up to index
        { ...state[i], likes: state[i].likes + 1 },
        ...state.slice(i + 1),
      ]
    default:
      return state;
  }


  return state;
}

export default posts;
