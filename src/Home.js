import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: 'Blockchain is the Future', body: 'lorem ipsum...', author: 'Bharat', id: 1 },
      { title: 'Fratalyst', body: 'lorem ipsum...', author: 'Frankie', id: 2 },
      { title: 'How to become a Leetcode God', body: 'lorem ipsum...', author: 'Lavish', id: 3 },
    ]);


    return (
      <div className='home'>
        <BlogList blogs={blogs} title='All Blogs!' />
        <BlogList blogs={blogs.filter((blog)=> blog.author === 'Frankie')} title="Frankie's Blogs!" />
      </div>
    );
}

export default Home;