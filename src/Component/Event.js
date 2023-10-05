import { Outlet } from "react-router-dom";

function Event() {
    return(
        <div>
            <div className="rom">
                <h2>오늘의 이벤트</h2>
            </div>
            <Outlet></Outlet>
        </div>
    )
}
export default Event;