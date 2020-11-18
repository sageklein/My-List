export const getAll = () => {
	return fetch(
		"https://gist.githubusercontent.com/sageklein/4a8f7b97249113b70bcafb6e24eb3464/raw/7b25168d5aca306d46a84a1eb9c2acece2bc75ae/list.js"
	)
		.then((response) => response.json())
		.then((parsedData) => parsedData.person);
};
