import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import HR from "../pages/hr"
import Vendor from "../pages/vendor"
function RoutesLink() {
    return (
        <Router>
            <Routes>
                {/* <Route index element={<UsersIndex />} />
             <Route path=":id" element={<UserProfile />} /> */}
                <Route exact path="" element={<Login />} />
                <Route exact path="hr" element={<HR />} />
                <Route exact path="vendor" element={<Vendor />} />
            </Routes>
        </Router>
    );
}

export default RoutesLink;