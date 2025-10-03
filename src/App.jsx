import { CurrentUserInfo } from "./CurrentUserInfo"
import { UserInfo } from "./UserInfo"

function App() {
  return (
    <CurrentUserInfo>
      <UserInfo />
    </CurrentUserInfo>
  )
}

export default App