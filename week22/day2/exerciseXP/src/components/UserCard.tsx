interface UserCardProps {
    name?: string;
    age?: number;
    role?: string
}

export default function UserCard({ name = "New User", age = 0, role = "guest" }: UserCardProps) {
    return (
        <>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>role: {role}</p>
        </>

    )
}