import './App.css';

function App() {
  const name = 'sonny'
const isMale = false

function getGreeting(user) {
if (user) {
  return <h1>Hello, {user}!</h1>;
}
return <h1>Hello, Stranger.</h1>;
}

  return (
    <div className="app">
  {getGreeting( )}
  <h2>You are a {isMale ? "Male" : "Female"}</h2>
    </div>
  );

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

return (
  <h1>
    Hello, {formatName(user)}!
  </h1>);

}

export default App;
