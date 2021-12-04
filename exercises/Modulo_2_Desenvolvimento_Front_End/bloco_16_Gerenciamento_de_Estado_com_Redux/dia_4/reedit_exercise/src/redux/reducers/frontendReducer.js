import { GET_SUBREEDDIT_FRONTEND } from "../actions"

const INITIAL_STATE = {
	frontend: [],
}

const frontendReducer = (state=INITIAL_STATE, { type, payload }) => {
	switch(type) {
		case GET_SUBREEDDIT_FRONTEND:
			return {
				...state,
				frontend:[payload],
			}
		default: 
			return state;
	}
}

export default frontendReducer;