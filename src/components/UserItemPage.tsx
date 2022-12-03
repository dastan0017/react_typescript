import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import { useParams, useNavigate } from 'react-router-dom'

type UserItemPageParams = {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>();

    const navigate = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params.id)
            setUser(response.data)
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Page of user: {user?.name}</h1>
            <div>
                <p>Email: {user?.email}</p>
                <p>Address: {user?.address.city} city, zipcode: {user?.address.zipcode}, str {user?.address.street}</p>
            </div>
        </div>
    )
}

export default UserItemPage