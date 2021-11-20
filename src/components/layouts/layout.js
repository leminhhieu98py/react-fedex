import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Content from "./content"
import "../../assets/css/layout.css";
import "../../assets/js/layout.js";

export default function Layout(){
    return(
        <div className="layout-wrapper">
             <Navbar/>
             <Content/>
             <Sidebar/>
        </div>
    )
}