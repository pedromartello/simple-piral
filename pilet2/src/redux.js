const INCREMENT_COUNTER = "INCREMENT_COUNTER"
const defaultState = {
  counter: 0
}

const incrementAction = () => ({
  type: INCREMENT_COUNTER
});

const incrementReducer = (state = defaultState, action = {}) => {
  if (action.type === INCREMENT_COUNTER) {
    return {
      counter: state.counter+1
    }
  } else 
    return state;
}

const module = {
  id: "pilet2",
  reducerMap: {
    pilet2: incrementReducer
  }
}