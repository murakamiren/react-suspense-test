import { Box, HStack, ListItem, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

type userProps = {
	name: string;
	age: number;
	email: string;
};

const User: FC<userProps> = ({ name, age, email }) => {
	return (
		<ListItem>
			<Box>
				<HStack spacing={3}>
					<Text fontSize="3xl" fontWeight="bold">
						{name}
					</Text>
					<Text fontSize="xl" fontWeight="medium">
						{age}
					</Text>
					<Text fontSize="xl" fontWeight="medium">
						{email}
					</Text>
				</HStack>
			</Box>
		</ListItem>
	);
};

export default User;
