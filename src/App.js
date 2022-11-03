import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import MainPage from './components/mainPage'
import UsersListPage from './components/usersListPage'
import UserPage from './components/userPage'
import EditUserPage from './components/editUserPage'

function App() {
  return (
    <Routes>
      <Route path="" element={<MainPage/>}/>
        <Route path="users/*" element={<UsersListPage/>}>
            <Route path=":userId/*" element={<UserPage/>}>
                <Route path=":edit" index element={<EditUserPage/>}/>
            </Route>
        </Route>
      <Route path="*" element={<Navigate to={'/'}/>}/>
    </Routes>
  );
}

export default App;
