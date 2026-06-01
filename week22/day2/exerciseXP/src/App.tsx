import Greeting from './components/Greeting'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import UserList from './components/UserList'


function App() {

  return (
    <>
      <Greeting name={"PhilipJ"} messageCount={0} />
      <Counter />
      <UserCard name={"J Doe"} age={99} role={"admin"} />
      <UserCard name={"A Doe"} />
      <UserList />
    </>
  )
}

export default App
