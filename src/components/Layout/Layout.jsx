import Brand from "../Brand";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

export default function Layout({children}){
    return (
        <div className="layoutContainer">
            <div className="headerClass">
                <Brand />
                <NavBar />
            </div>
            <main className="body">{children}</main>
            <Footer />
        </div>
    )
}