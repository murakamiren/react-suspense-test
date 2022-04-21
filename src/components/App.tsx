import { Box, Spinner, Text } from "@chakra-ui/react";
import { FC, Suspense } from "react";
import UserList from "./userList";

const App: FC = () => {
	return (
		<Box>
			<Text fontSize="3xl">hello world</Text>
			<Suspense fallback={<Spinner size="xl" />}>
				<UserList />
			</Suspense>
		</Box>
	);
};

export default App;
