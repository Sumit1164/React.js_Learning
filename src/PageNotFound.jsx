import { Link } from "react-router";
import HomePage from "./HomPage";

export default function PageNotFound() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Page Not Found</h1>
        <div>
          <Link to={"/"}>Go to Home page</Link>
        </div> <br />
        <img
          src="https://www.wpoven.com/blog/wp-content/uploads/2022/09/error-404-not-found.png"
          alt=""
        />
      </div>
    );
}