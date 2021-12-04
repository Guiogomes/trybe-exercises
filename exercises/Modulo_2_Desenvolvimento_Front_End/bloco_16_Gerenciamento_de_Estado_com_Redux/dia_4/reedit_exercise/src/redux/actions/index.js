import { getSubreedditFrontendInfo, getSubreedditReactInfo } from "../../service/fetchApi";

export const GET_SUBREEDDIT_FRONTEND = 'GET_SUBREEDDIT_FRONTEND';
export const GET_SUBREEDDIT_REACT = 'GET_SUBREEDDIT_REACT';

export const getSubreedditReact = (payload) => ({
	type: GET_SUBREEDDIT_REACT,
	payload,
});

export const getSubreedditFrontend = (payload) => ({
	type: GET_SUBREEDDIT_FRONTEND,
	payload,
});

export const getInfoWithThunk = () => async(dispatch) => {
	const reactInfo = await getSubreedditReactInfo()
	const frontendInfo = await getSubreedditFrontendInfo()
	dispatch(getSubreedditReact(reactInfo.data.children))
	dispatch(getSubreedditFrontend(frontendInfo.data.children))
}