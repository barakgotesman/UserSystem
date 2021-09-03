
import { useHistory  } from "react-router";
export const WEB_URL = "http://localhost:3001/api";

export const ChangePage = (path) => {
    const history = useHistory();
    history.push(path);
}

