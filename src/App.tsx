import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="App">
      <h1>Working!</h1>
      <Card width='200px' height='200px' variant={CardVariant.outlined} onClick={() => console.log("Click")}>
        <button>Click me pls</button>
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;
