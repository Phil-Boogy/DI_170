function UserFavoriteAnimals({ array }) {
    return (
        <ul>
            {array.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}

export default UserFavoriteAnimals