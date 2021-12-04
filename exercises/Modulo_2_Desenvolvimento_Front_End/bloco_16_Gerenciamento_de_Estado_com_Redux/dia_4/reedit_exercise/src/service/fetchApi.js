const BASE_URL_REACT = 'https://www.reddit.com/r/reactjs.json'
const BASE_URL_FRONTEND = 'https://www.reddit.com/r/frontend.json '

export const getSubreedditReactInfo = async() => {
	const response = await fetch(BASE_URL_REACT);
	const resolve = response.json()
	return resolve;
}

export const getSubreedditFrontendInfo = async() => {
	const response = await fetch(BASE_URL_FRONTEND);
	const resolve = response.json()
	return resolve;
}