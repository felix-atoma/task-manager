import PropTypes from 'prop-types';
import Button from './Button';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-3 border-b dark:border-gray-700">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600"
        />
        <span
          className={`${task.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-gray-200'}`}
        >
          {task.text}
        </span>
      </div>
      <Button
        variant="danger"
        size="sm"
        onClick={onDelete}
        aria-label={`Delete task: ${task.text}`}
      >
        Delete
      </Button>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;