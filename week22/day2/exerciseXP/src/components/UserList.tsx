import { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    username: string;
    company: Company
}

interface Company {
    name: string
}

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not okay');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                if (err instanceof Error)
                    setError(err.message);
                else {
                    setError("An unknown error occurred")
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            {users.map(user => (
                <div key={user.id}>
                    <p> name: {user.name}</p>
                    <p>username: {user.username}</p>
                    <p>company: {user.company.name}</p>
                    <p>________________________</p>
                </div>
            ))}
        </>
    )
}