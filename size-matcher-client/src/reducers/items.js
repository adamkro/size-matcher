import { itemsList } from '../data/items';

export default function items(state = itemsList, action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return state.concat([action.text])
      default:
        return state
    }
  }
  