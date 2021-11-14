
export default function recommendedSize(state = 60, action) {
    switch (action.type) {
      case 'SET_RECOMMENDATION':
          return state; //api call
      default:
        return state
    }
  }
  