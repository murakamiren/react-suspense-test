import { Heading, Input, Spinner, Text, UnorderedList, VStack } from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, FC, useEffect, useState } from "react";
import useSWR from "swr";
import { userType } from "../types/userType";
import { fetcher } from "./libs/fetcher";
import User from "./user";

const UserList: FC = () => {
	const [searchWord, setSearchWord] = useState<string>("");

	const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
		const word = e.target.value;
		// console.log(word);

		if (word === "") {
			setSearchWord("");
		} else {
			setSearchWord(word);
		}
	};

	const { data: userData, error } = useSWR<userType[]>(`${import.meta.env.VITE_DATA_URL}/user/${1}`, fetcher, {
		suspense: true,
	});

	// useEffect(() => {
	// 	axios.get(`${import.meta.env.VITE_DATA_URL}/user/${searchWord}`).then((d) => {
	// 		const res = d.data;
	// 		console.log(res);
	// 	});
	// }, [searchWord]);

	return (
		<UnorderedList>
			<Heading as="h2">user list</Heading>
			<Input placeholder="search by id" w="70%" onChange={handleSearchWord} />
			<VStack spacing={4} />
			{userData?.map((user) => (
				<User key={user.id} name={user.name} age={user.age} email={user.email} />
			))}
			<Text>id: {searchWord}</Text>
		</UnorderedList>
	);
};

export default UserList;
