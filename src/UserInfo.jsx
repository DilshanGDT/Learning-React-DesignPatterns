import { useCurrentUser } from "./useCurrentUser";

export const UserInfo = () => {
	const { isLoading, user } = useCurrentUser();

	if (isLoading) {
		return <p>Loading...</p>
	}

	const { name, age, hairColor, hobbies } = user;

	return (
		<>
		<h3>{name}</h3>
		<p>Age: {age} years</p>
		<p>Hair Color: {hairColor}</p>
		<h3>Hobbies:</h3>
		<ul>
			{hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
		</ul>
		</>
	);
};