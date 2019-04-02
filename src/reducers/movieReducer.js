import {
  STORE_MOVIES_DATA,
  REMOVE_MOVIE_FROM_LIST,
  ADD_MOVIE_TO_LIST,
} from '../actions/types';

export default (
  state = { data: { mylist: [], recommendations: [] } },
  action
) => {
  switch (action.type) {
    case STORE_MOVIES_DATA:
      return {
        data: action.payload[0],
      };
    case ADD_MOVIE_TO_LIST:
      return {
        data: {
          ...state.data,
          mylist: [...state.data.mylist, action.payload],
        },
      };
    case REMOVE_MOVIE_FROM_LIST:
      return {
        data: {
          mylist: state.data.mylist.filter(
            item => item.id !== action.payload.id
          ),
          recommendations:
            state.data.recommendations.filter(
              item => item.id === action.payload.id
            ).length === 0
              ? [...state.data.recommendations, action.payload]
              : state.data.recommendations,
        },
      };
    default:
      return state;
  }
};
