import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Blockchain is the Future', body: 'lorem ipsum...', author: 'Bharat', id: 1 },
    { title: 'Fratalyst', body: 'lorem ipsum...', author: 'Frankie', id: 2 },
    { title: 'How to become a Leetcode God', body: 'lorem ipsum...', author: 'Lavish', id: 3 },
  ]);

  const [name, setName] = useState('Bharat');

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('useEffect ran');
    //console.log(blogs);
    console.log(name);
  }, [name]);

  return (
    <div className='home'>
      <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
      <button onClick={() => setName('Jacob')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
