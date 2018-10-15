import React, { Component } from 'react';

function Buttons(props) {
	let { onDelete, onEdit, edit } = props;
  return (
		<React.Fragment>
			{
				edit ?
					<td className="btn_change">
						<button onClick={onEdit} className="edit">Save</button>
						<button className="delete" onClick={onDelete}>Delete</button>
					</td>
				:
					<td className="btn_change">
						<button onClick={onEdit} className="edit">Edit</button>
						<button className="delete" onClick={onDelete}>Delete</button>
					</td>
			}
		</React.Fragment>	
	)
}

export default Buttons;