import './App.css';


function App() {
  function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

  return (
    <div className="App">
      {add(1,3)}
      {substract(5,4)}
    </div>
  );
}

export default App;
