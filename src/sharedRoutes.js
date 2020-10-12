import { Home } from "./modules";
import fetchSpaceXData from "./fetchData";

const routes = [
	{
		path: "/",
		exact: true,
		component: Home,
		fetchInitialData: (urlObj) => fetchSpaceXData(urlObj),
	}
];

export default routes;
