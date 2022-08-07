import React from 'react';
import './App.css'
import UserList from './component/userList';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import TodoList from './component/todolist';
import BasicForm from './component/login';

const App = () => {
  return (<>
    <header className='header-container'>
      <div><img src='https://media.wired.com/photos/5954a23cce3e5e760d52d91a/master/w_120,c_limit/facebook_2015_logo.jpg 120w, https://media.wired.com/photos/5954a23cce3e5e760d52d91a/master/w_240,c_limit/facebook_2015_logo.jpg 240w, https://media.wired.com/photos/5954a23cce3e5e760d52d91a/master/w_320,c_limit/facebook_2015_logo.jpg 320w, https://media.wired.com/photos/5954a23cce3e5e760d52d91a/master/w_640,c_limit/facebook_2015_logo.jpg 640w, https://media.wired.com/photos/5954a23cce3e5e760d52d91a/master/w_960,c_limit/facebook_2015_logo.jpg 960w' alt='' /></div>
      <div className='link-cantainer'>
      <Link to='/'>Login</Link>
      <Link to='/userlist'>User</Link>
      <Link to='/todo'>Todo</Link>
      </div>
    </header>
    <div className='page-container'> <Routes>
      <Route exact path="/userList" element={<UserList />} />
      <Route exact path="/" element={<BasicForm />} />
      <Route exact path='/todo' element={<TodoList />} />
    </Routes></div>
   

  </>
  )
}
export default App