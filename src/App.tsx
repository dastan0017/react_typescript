import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

function App() {
  const users: IUser[] = [
    { id: 1, name: "Dastan", address: { city: "Bishkek", zipcode: "123456", street: "Baba-Ata" }, email: "asdf@gmail.com" },
    { id: 2, name: "Dastan", address: { city: "Bishkek", zipcode: "123456", street: "Baba-Ata" }, email: "asdf@gmail.com" }
  ]

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
