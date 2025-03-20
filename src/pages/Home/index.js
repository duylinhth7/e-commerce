import Banner from "../../components/banner";
import BoxIphone from "../../components/boxIphone";
import BoxSamsung from "../../components/boxSamsung";
import "../../styles/scss/home.scss";

function Home() {
    return (
        <>
            <div className="home">
                <div>
                    <BoxIphone />
                </div>
                <div className="mt-20">
                    <BoxSamsung />
                </div>
                <div className="mt-50">
                    <Banner />
                </div>
            </div>

        </>
    )
}
export default Home;