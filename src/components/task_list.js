import React, { PropTypes } from 'react';
import { propType } from 'graphql-anywhere';
import gql from 'graphql-tag';

import Task from './task';

function TaskList({ tasks, onSnoozeTask, onPinTask }) {
  const events = {
    onSnoozeTask,
    onPinTask
  };

  return (
    <div className="list-items">
      {tasks.map(task => <Task key={task.id} task={task} {...events} />)}
    </div>
  );
}

TaskList.fragments = {
  task: gql`
    fragment TaskListTaskFragment on Task {
      id
      updatedAt
      ...TaskFragment
    }
    ${Task.fragments.task}
  `
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(propType(Task.fragments.task)).isRequired,
  onSnoozeTask: PropTypes.func,
  onPinTask: PropTypes.func
};

export default TaskList;