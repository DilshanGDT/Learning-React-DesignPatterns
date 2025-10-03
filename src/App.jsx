import { useState } from "react"
import { ControlledForm } from "./ControlledForm"
import { ControlledModal } from "./ControlledModal"
import { UncontrolledForm } from "./UncontrolledForm"


function App() {
  const [showModal, setshowModal] = useState(false);

  return (
    <>
    <ControlledModal shouldShow={showModal} onRequestClose={() => setshowModal(false)}>
      <ControlledForm
      initialName={"Shawan"}
      initialAge={23}
      initialHairColor="Brown" />
    </ControlledModal>
    <button onClick={() => setshowModal(true)}>Open Modal</button>
    </>
  )
}

export default App
