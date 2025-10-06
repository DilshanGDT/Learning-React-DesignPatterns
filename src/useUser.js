import { useResource } from "./useResource";

export const useUser = (userId) => {
  const { isLoading, data: user } = useResource('/users/' + userId);
  return { isLoading, user };
}

//export const useProduct = (userId) => {...} same implementaton