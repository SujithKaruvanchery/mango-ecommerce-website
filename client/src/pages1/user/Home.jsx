import React from "react";
import PromoSections from "../../components1/user/PromoSections";
import CarouselSection from "../../components1/user/CarouselSection";
import AllProductSection from "../../components1/user/AllProductSection";
import Login from "../shared/Login";


function Home() {
  return (
    <div>
        <div>
            <CarouselSection/>
        </div>
      <div>
        <PromoSections />
      </div>
      <div>
        <AllProductSection/>
      </div>
      <div>
        <Login/>
      </div>
    </div>
  );
}

export default Home;
