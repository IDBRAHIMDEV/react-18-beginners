import Navbar from "../shared/Navbar"
import SideBar from "./SideBar"
import ListCard from "./ListCard"
import ListUser from "./ListUser"
import Footer from "../shared/Footer"

function Blog() {

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Navbar></Navbar>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <SideBar></SideBar>
                    </div>
                    <div className="col-8">
                        <ListCard></ListCard>
                        <hr />
                        <ListUser></ListUser>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog