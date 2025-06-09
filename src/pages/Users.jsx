import {NavLink, Outlet} from "react-router-dom"

export default function UserLayout(){
    return (
        <div className="p-4">
            <h1 className="text-x1 font-bold">User Section</h1>
            <div className="nt-4 space-x-4">
                <NavLink to="profile" className="text-blue-500">Profile</NavLink>
                <NavLink to="settings" className="text-blue-500">Settings</NavLink>
            </div>
            <div className="nt-6">
                <Outlet/>
            </div>
        </div>
    );
}
