import { Outlet } from "react-router-dom";

function About(props){
    return(
        <div>
            <h1>About 페이지긴 합니다망</h1>
            <Outlet></Outlet>
        </div>
    )
}

export default About;