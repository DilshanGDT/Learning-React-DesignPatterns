import { UserInfo } from "./UserInfo"
import { UserLoader } from "./UserLoader"

function App() {
  return (
    <>
    <UserLoader userId="345">
      <UserInfo />
    </UserLoader>
    <UserLoader userId="120">
      <UserInfo />
    </UserLoader>
    </>
  )
}

export default App