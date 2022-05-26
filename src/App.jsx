import React, {useState} from 'react';

function App() {
const [count, setCount] = useState(0);
const [name, setName] = useState('Seyi')

const increment = () => {
  setCount(count + 1)
};

const decrement = () => {
  setCount(count - 1);
}
  return (
    <div>
      <h1>Welcome to my counter app</h1>
      <p>The count is:{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App



// class based component

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default App;


// import './App.css';
// import Header from "./Header";

// // BEM - Block Element Modifier

// function App() {
//   return (
//     <div className="app">
//       <Header />
//       <h1 className="app__title">Hello World</h1>
//       <h1 className="app__title app__title--large">This is a large title</h1>
//       <h1 className="app__title app__title--small">This is a small title</h1>
//     </div>
//   )
// }


  // introduction to jsx

  // function App() {
//   const name = 'sonny'
// const isMale = false

// function getGreeting(user) {
// if (user) {
//   return <h1>Hello, {user}!</h1>;
// }
// return <h1>Hello, Stranger.</h1>;
// }

//   return (
//     <div className="app">
//   {getGreeting( )}
//   <h2>You are a {isMale ? "Male" : "Female"}</h2>
//     </div>
//   );

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// return (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>);

// }

// export default App;
