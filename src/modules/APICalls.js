const dataURL = "https://christmaslist-a8957-default-rtdb.firebaseio.com/";

export const getAll = () => {
	return fetch(
		`${dataURL}/christList.json`)
		.then(response => response.json())
};

export const updateChristmasList = (listObj) => {
	const updateObj = {
		"title": listObj.title
	}
	return fetch(`${dataURL}/christmaslist/{listObj.fbid}`,{
		method: "PUT",
		headers: {
			"Content-Type": "application.json"
		},
		body: JSON.stringify(updateObj)
	})
}
