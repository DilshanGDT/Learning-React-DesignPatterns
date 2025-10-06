import { printProps } from "./printProps"
import { UserInfo } from "./UserInfo"

const UserInfoWrapped = printProps(UserInfo);

function App() {
  return (
    <UserInfoWrapped user={{ name: 'Shaun', age: 123, hairColor: 'brown', hobbies: [] }} />
  )
}

export default App