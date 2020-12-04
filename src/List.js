import React, { useEffect, useState } from "react";
import { getAll } from "./modules/APICalls";

export const List = () => {
	const [listArray, setListArray] = useState([]);

	useEffect(() => {
		getAll().then((data) => {
			let newArray = Object.keys(data).map((key, index) => {
				data[key].fbid = key;
				data[key].checked = false;
				return data[key];
			});
			setListArray(newArray);
		});
	}, []);

	const handleCheckChange = (event) => {
		//what is the id of the item
		console.log("event.target.id", event.target.id);
		let newListArray = [...listArray]
		newListArray.map(item => {
			if(item.fbid === event.target.id){
			 item.checked = item.checked ? false : true
			}
			return item;
		})
		setListArray(newListArray) 
	};



	return (
		<>
			<h4>Christmas List</h4>
			<div id="checklist">
				{listArray.map((item) => {
					return (
						<React.Fragment >
							<input
								id={item.fbid}
								type="checkbox"
								name="r"
								value="1"
								checked={item.checked}
								onChange={(event) => handleCheckChange(event)}
							></input>
							<label htmlFor={item.fbid}>{item.title}</label>
						</React.Fragment>
					);
				})}
			</div>
		</>
	);
};
