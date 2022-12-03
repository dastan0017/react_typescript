import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';
import { Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div style={{ margin: "2rem" }}>
        <Link to={"/users"} style={{ padding: 10, margin: 10, border: "2px solid grey", borderRadius: 4 }}>Users</Link>
        <Link to={"/todos"} style={{ padding: 10, margin: 10, border: "2px solid grey", borderRadius: 4 }}>Todos</Link>
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
