import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskItem from "../components/TaskItem";
import Button from "../components/Button";
import Card from "../components/Card";

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Task Manager</h1>
        
        <form onSubmit={addTask} className="mb-6 flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 border rounded-md px-3 py-2 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Enter new task"
            required
          />
          <Button type="submit">Add Task</Button>
        </form>

        <div className="flex gap-2 mb-6">
          <Button
            variant={filter === "all" ? "primary" : "secondary"}
            onClick={() => setFilter("all")}
          >
            All ({tasks.length})
          </Button>
          <Button
            variant={filter === "active" ? "primary" : "secondary"}
            onClick={() => setFilter("active")}
          >
            Active ({tasks.filter(t => !t.completed).length})
          </Button>
          <Button
            variant={filter === "completed" ? "primary" : "secondary"}
            onClick={() => setFilter("completed")}
          >
            Completed ({tasks.filter(t => t.completed).length})
          </Button>
        </div>

        <ul className="space-y-2">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() =>
                  setTasks(
                    tasks.map((t) =>
                      t.id === task.id ? { ...t, completed: !t.completed } : t
                    )
                  )
                }
                onDelete={() =>
                  setTasks(tasks.filter((t) => t.id !== task.id))
                }
              />
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              {filter === "all"
                ? "No tasks yet. Add one above!"
                : `No ${filter} tasks found`}
            </p>
          )}
        </ul>
      </Card>
    </div>
  );
};

export default Tasks;