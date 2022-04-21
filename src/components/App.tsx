import { Box, Spinner } from "@chakra-ui/react";
import { FC, Suspense } from "react";
import UserList from "./userList";

const App: FC = () => {
	return (
		<Box>
			<Suspense fallback={<Spinner size="xl" />}>
				<UserList />
			</Suspense>
		</Box>
	);
};

export default App;
