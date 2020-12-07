const dataURL = "https://christmaslist-a8957-default-rtdb.firebaseio.com/";

export const getAll = () => {
	return fetch(
		`${dataURL}/christList.json`)
		//parses the respons and sends it back to the comonent that called for it
		//implicit return
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
