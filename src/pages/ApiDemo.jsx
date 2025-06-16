import { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import Card from '../components/Card';
import Button from '../components/Button';
import { useTheme } from '../context/ThemeContext';

const ApiDemo = () => {
  const { darkMode } = useTheme();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const postsPerPage = 5;

  // Fetch posts from JSONPlaceholder API
  const { data: posts, loading, error } = useApi(
    `https://jsonplaceholder.typicode.com/posts`
  );

  // Filter and paginate posts
  useEffect(() => {
    if (posts) {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [posts, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredData?.length / postsPerPage) || 1;
  const currentPosts = filteredData?.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset to first page on new search
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">API Demo</h1>
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={handleSearch}
            className={`w-full p-3 border rounded-md ${
              darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
            }`}
          />
        </div>

        {/* Loading and Error States */}
        {loading && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="p-4 mb-6 rounded-md bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100">
            Error: {error}
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          {currentPosts?.length > 0 ? (
            currentPosts.map((post) => (
              <Card key={post.id} className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 dark:text-white">{post.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.body}
                </p>
                <div className="mt-3 text-sm text-blue-600 dark:text-blue-400">
                  Post ID: {post.id} | User ID: {post.userId}
                </div>
              </Card>
            ))
          ) : (
            !loading && (
              <p className="text-center py-8 text-gray-500 dark:text-gray-400">
                {searchTerm ? 'No matching posts found' : 'No posts available'}
              </p>
            )
          )}
        </div>

        {/* Pagination Controls */}
        {filteredData?.length > postsPerPage && (
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </Button>
            
            <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Page {page} of {totalPages}
            </span>
            
            <Button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ApiDemo;