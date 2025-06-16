import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-8 text-center" hoverEffect>
        <h1 className="text-3xl font-bold mb-4 dark:text-white">
          Welcome to TaskMaster
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          A modern task management application built with React and Tailwind CSS
        </p>
        
        <div className="flex justify-center gap-4">
          <Link to="/tasks">
            <Button size="lg">Manage Tasks</Button>
          </Link>
          <Link to="/api-demo">
            <Button variant="secondary" size="lg">
              API Demo
            </Button>
          </Link>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card className="p-4">
            <h3 className="font-bold mb-2 dark:text-white">Task Management</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Add, complete, and organize your tasks with ease
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-bold mb-2 dark:text-white">Dark Mode</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Toggle between light and dark themes
            </p>
          </Card>
          <Card className="p-4">
            <h3 className="font-bold mb-2 dark:text-white">API Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Demonstrates fetching data from external APIs
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default Home;