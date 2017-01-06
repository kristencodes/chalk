import React from 'react';

export default function(props) {

	let showSelect = (
		<li>
			<button className="success" onClick={(e) => props.selectCard(e, props.question)}>Select</button>
		</li>
	)
 	let showDeactivated = (
 		<li>
			<button className="deactivated" onClick={(e) => props.selectCard(e, props.question)}>Select</button>
 		</li>
	)
	let edit = (
			<i className="fa fa-pencil-square-o"></i>
	)
	let showRemove = (
		<li>
			<button className="error" onClick={(e) => props.removeCard(e,props.question._id)}>Remove</button>
		</li>
	)

	//if the sh

	return (
		<div className="inline card questionCard">
			<ul className="questionCard--attr">
				<li>{props.question.category}</li>
				<li>{props.question.difficulty}</li>
				<li>{props.question.type}</li>
				{props.showSelected === true ? showSelect : showRemove}
			</ul>
			<div className="questionCard--attr">
				<p>{props.question.body}</p>
				{showSelect ? edit : null}
			</div>
		</div>
	)
}
