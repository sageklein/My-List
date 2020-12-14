import React, { useEffect, useState } from "react";
import { getAll } from "../../modules/APICalls";

export const ChrisList = () => {
	//defining variable and method to update state
	const [listArray, setListArray] = useState([]);

	//after component loads, useEffect runs, we get all data and add values "fbid" and "checked"
	useEffect(() => {
		getAll().then((data) => {
			//gets all data as an array, inside the data there is a key, "object.key" is native javascript that allows us to access that key, then map over it and add adition properties
			console.log("data", data);
			let newArray = Object.keys(data).map((key, index) => {
				data[key].fbid = key;
				data[key].checked = false;
				return data[key];
			});
			console.log("newArray", newArray);
			//calls setListArray to run state again with the new values
			setListArray(newArray);
		});
	}, []);

	const handleCheckChange = (event) => {
		//what is the id of the item
		console.log("event.target.id", event.target.id);
		//makes a copy of the array that is in state using a spread operator
		let newListArray = [...listArray];
		newListArray.map((item) => {
			if (item.fbid === event.target.id) {
				//ternary statment, if true set false, if false set to true
				item.checked = item.checked ? false : true;
			}
			//returns new item to newListArray
			return item;
		});
		//state change causes return to run again, now with newListArray information
		setListArray(newListArray);
	};

	return (
		<>
			<div id="checklist">
				{listArray.map((item) => {
					return (
						<React.Fragment key={item.fbid}>
							<input
								id={item.fbid}
								type="checkbox"
								checked={item.checked}
								//onChange is an event listener, when the listner hears the change it stends an event to handleCheckChange
								onChange={handleCheckChange}
							></input>
							<label htmlFor={item.fbid}>{item.title}</label>
						</React.Fragment>
					);
				})}
			</div>
		</>
	);
};
