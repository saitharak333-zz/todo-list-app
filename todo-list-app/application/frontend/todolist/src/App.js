import React, { Component } from 'react';
// import FirstSubpart, {First, Firstpart} from "./components/example/first"
// import FirstSubpart from "./components/example/func"
// import Counter from "./components/counter/Counter"
// import logo, { ReactComponent } from './logo.svg';
import TodoApp from "./components/todo/TodoApp"
import './App.css'
import './bootstrap.css'

class App extends Component {
  render () {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
  }
}

// class PrevApp extends Component {
//   render () {
//     return (
//       <div className="PrevApp">
//         ToDo Application
//         <Newline></Newline>
//         <First />
//         <Firstpart />
//         <FirstSubpart />
//       </div>
//     );
//   }
// }

// function Newline() {
//   return (
//     <div className="Newline">
//       it is another newline
//     </div>
//   );
// }

export default App;
