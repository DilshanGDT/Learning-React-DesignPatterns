import { Card, CardHeader, CardBody, CardFooter } from "./composition"

function App() {
  return (
		<>
    <Card>
			<CardHeader title="Card 1" />
			<CardBody>
				<p>This is the card content</p>
			</CardBody>
			<CardFooter>
				<p>A footer</p>
			</CardFooter>
		</Card>
		<Card>
			<CardBody>
				<p>This is the card content</p>
			</CardBody>
		</Card>
		</>
  )
}

export default App