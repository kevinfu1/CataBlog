import './App.css';

function App() {
  const title = "Welcome to CataBlog"
  const likes = 50;
  const person = { name: 'yoshi', age: 30}
  const link = "http://www.google.com"

  return (
    <div className = "App">
      <div className = "content">
        <h1> {title} </h1>
        <p>Liked {likes} times</p>
        <p> {person.name} </p>
        <p> {10} </p>
        <p> {'hello, catalysters'} </p>
        <p> {Math.random() * 10} </p>
        <a href={link}>Google Site</a>
      </div>
    </div>
  );
}

export default App;
