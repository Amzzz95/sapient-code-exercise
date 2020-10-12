import "isomorphic-fetch";
import config from "../config";

function fetchSpaceXData({ launch_year, launch_success, land_success }) {
    const { API, APIDataLimit } = config;

    const appendLaunchYear = (launch_year && `&launch_year=${launch_year}`) || "";
    const appendLaunchSuccess = (launch_success && `&launch_success=${launch_success}`) || "";
    const appendLandSuccess = (land_success && `&land_success=${land_success}`) || "";

    const url = `${API}?limit=${APIDataLimit}${appendLaunchYear}${appendLaunchSuccess}${appendLandSuccess}`;

    return fetch(url)
        .then(data => data.json())
        .catch(err => console.error(err));
}

export default fetchSpaceXData;
