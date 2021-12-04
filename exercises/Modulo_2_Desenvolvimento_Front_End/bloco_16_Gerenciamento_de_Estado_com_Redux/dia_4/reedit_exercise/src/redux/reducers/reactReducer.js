import { GET_SUBREEDDIT_REACT } from "../actions"

const INITIAL_STATE = {
	react: [],
}

const reactReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch(type) {
		case GET_SUBREEDDIT_REACT:
			return {
				...state,
				react: [payload]
			}
		default:
			return state
	}
};

export default reactReducer;