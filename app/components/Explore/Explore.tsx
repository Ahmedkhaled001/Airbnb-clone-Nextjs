import React from "react";
import Exploreitems from "./Exploreitems";
import { getExplore } from "../../utils/api";
import { ExploreData } from "@/app/types/app";

const Explore = async () => {
  const exploreData: ExploreData = await getExplore();
  return (
    <section>
      <div className="container mt-7 mb-8">
        <h2 className=" font-semibold text-4xl mb-5">Explore Nearby</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map((item) => (
            <Exploreitems
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
