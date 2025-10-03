import { DataLoader } from "./DataLoader"
import { ResourceLoader } from "./ResourceLoader"
import { UserInfo } from "./UserInfo"
import { UserLoader } from "./UserLoader"
import axios from "axios"

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}

const getTestData = () => {
  return {
    id: '678',
	  name: 'Tharaka Dilshan',
	  age: 33,
	  hairColor: 'black',
	  hobbies: ['golf', 'mathematics'],
  }
}

function App() {
  return (
    <>
    <DataLoader 
      getDataFn={getServerData(`/api/users/345`)}   //we can use getTestData here to test
      resourceName="user"
      >
        <UserInfo />
    </DataLoader>

    <ResourceLoader   //much more flexible
     resourceUrl={`/api/users/345`}
     resourceName="user"
     >
      <UserInfo />
    </ResourceLoader>

    <UserLoader userId="345">
      <UserInfo />
    </UserLoader>
    </>
  )
}

export default App