import axios from "axios";

export const fetcher = async (url: string) => {
	const res = await axios.get("https://rm-heroku-express-test.herokuapp.com/user");
	const data = res.data;
	return data;
};
