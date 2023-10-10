import { Outlet } from "react-router-dom";

function About(props){
    return(
        <div>
            <h1>About 페이지 입니다</h1>
            <Outlet></Outlet>
        </div>
    )
}

export default About;