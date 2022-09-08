import React, { useState } from 'react';
import './App.css';
import data from "./sampleData";
import AddNewCard from "./components/addNewCard";
import Header from './components/Header';
import Card from "./components/Card";

function App() {
    const [users, setUsers] = useState(data.users);
    let key = 0;

    function updateUser(userId, followers) {
        const newUsers = [...users];
        newUsers[userId].followers = followers;
        setUsers(newUsers);
    }

    function addUser(user) {
        const newUsers = [...users];
        newUsers.push(user);
        setUsers(newUsers);
    }

    return (
        <div className="root">
            <Header users={users} />
            {users.map(user => {
                return <Card user={user} icon={data.icon} userId={key} key={key++} updateUser={updateUser} />
            })}

            <AddNewCard addUser={addUser} />
        </div>
    )
}


export default App;
