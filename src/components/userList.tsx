import { Spinner, UnorderedList, VStack } from "@chakra-ui/react";
import { FC, Suspense } from "react";
import useSWR from "swr";
import { userType } from "../types/userType";
import { fetcher } from "./libs/fetcher";
import User from "./user";

const UserList: FC = () => {
	const { data } = useSWR<userType[]>(`${import.meta.env.VITE_DATA_URL}/user`, fetcher, { suspense: true });

	return (
		<UnorderedList>
			<VStack spacing={4} />
			{data?.map((user) => (
				<User key={user.id} name={user.name} age={user.age} email={user.email} />
			))}
		</UnorderedList>
	);
};

export default UserList;
