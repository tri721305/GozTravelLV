import {
  FETCH_ALL,
  FETCH_BY_SEARCH,
  FETCH_PLAN,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  COMMENT,
} from "../constants/actionTypes";

export default (state = { isLoading: true, plans: [] }, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "END_LOADING":
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        plans: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, plans: action.payload };

    case FETCH_PLAN:
      return { ...state, plan: action.payload };
    case LIKE:
      return {
        ...state,
        plans: state.plans.map((plan) =>
          plan._id === action.payload._id ? action.payload : plan
        ),
      };
    case COMMENT:
      return {
        ...state,
        plans: state.plans.map((plan) => {
          if (plan._id === action.payload._id) {
            return action.payload;
          }
          return plan;
        }),
      };
    case CREATE:
      return { ...state, plans: [...state.plans, action.payload] };
    case UPDATE:
      return {
        ...state,
        plans: state.plans.map((plan) =>
          plan._id === action.payload._id ? action.payload : plan
        ),
      };
    case DELETE:
      return {
        ...state,
        plans: state.plans.filter((plan) => plan._id !== action.payload),
      };
    default:
      return state;
  }
};
