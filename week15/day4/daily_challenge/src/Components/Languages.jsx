const LanguageCard = ({ name, votes, addVote }) => {
    return (
        <>
            <div>
                <h2>{name}</h2>
                <p>Votes: {votes}</p>
                <button onClick={() => addVote(name)}>VOTE HERE</button>
            </div>
        </>
    )
}

export default LanguageCard