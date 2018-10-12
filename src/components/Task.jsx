import React, { Component } from 'react';

function Task(props) {
	let { task, onToggleTaskStatus } = props;
  return (
		<td className={task.isDone ? 'task done' : 'task'} onClick={onToggleTaskStatus}>
			{task.title}
		</td>
	)
}

export default Task;
