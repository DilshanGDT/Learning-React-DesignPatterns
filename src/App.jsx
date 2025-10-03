import { ControlledForm } from "./ControlledForm"
import { UncontrolledForm } from "./UncontrolledForm"


function App() {
  return (
    <>
    <UncontrolledForm />
    <br />
    <ControlledForm
      initialName={"Shawan"}
      initialAge={23}
      initialHairColor={"Brown"} />
    </>
  )
}

export default App
