import React, { Component } from 'react';

function Buttons(props) {
	let { onDelete } = props;
  return (
		<td className="btn_change">
			<button className="edit">Edit</button>
			<button className="delete" onClick={onDelete}>Delete</button>
		</td>
	)
}

export default Buttons;