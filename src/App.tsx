import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';

function App() {

  return (
    <BrowserRouter>
      <div>
        <NavLink to={"/users"}>Users</NavLink>
        <NavLink to={"/todos"}>Todos</NavLink>
      </div>
      <Routes>
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserItemPage />} />
        <Route path='/todos/:id' element={<UserItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
