interface GreetingProps {
    name: string;
    messageCount: number
}

export default function Greeting({ name, messageCount }: GreetingProps) {
    return (
        <>
            <h2>Hello {name}</h2>
            <p>You have {messageCount} messages</p>
        </>
    )
}