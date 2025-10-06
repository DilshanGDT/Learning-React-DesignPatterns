import { printProps } from "./printProps"
import { UserInfo } from "./UserInfo"
import { withUser } from "./withUser";

const UserInfoWrapped = withUser(printProps(UserInfo), '123');

function App() {
  return (
    <UserInfoWrapped />
  )
}

export default App