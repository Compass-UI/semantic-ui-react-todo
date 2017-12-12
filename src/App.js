import React from 'react'
import Footer from './components/Footer'
import Login from './components/Login'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import './App.css'

const App = () => (
  <div className="AppContainer">
    <h1>Compass Admin Console</h1>
    <div className="App">
      <Login />
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </div>
)

export default App
