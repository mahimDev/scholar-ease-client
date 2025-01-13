import { Outlet } from "react-router-dom";
import NavBer from "../Components/Shared/NavBer/NavBer";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <nav>
                <NavBer></NavBer>
            </nav>
            <main className="min-h-[80vh]">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;