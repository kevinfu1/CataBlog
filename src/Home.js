import { useState } from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: 'Blockchain is the Future', body: 'lorem ipsum...', author: 'Bharat', id: 1 },
      { title: 'Fratalyst', body: 'lorem ipsum...', author: 'Frankie', id: 2 },
      { title: 'How to become a Leetcode God', body: 'lorem ipsum...', author: 'Lavish', id: 3 }
    ]);


    return (
        <div className = "home">
          {blogs.map((blog) => (
            <div className = "blog-preview" key={blog.id}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </div>
          ))}
        </div>
    )
}

export default Home;