import { ExploreItem } from "@/app/types/app";
import Image from "next/image";
import React from "react";

type ExploreItemProps = ExploreItem;
const Exploreitems = ({ img, location, distance }: ExploreItemProps) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-5 cursor-pointer hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out ">
      <div className=" relative w-16 h-16">
        <Image src={img} alt="img" fill />
      </div>
      <div>
        <h3>{location}</h3>
        <h4 className=" text-gray-400">{distance}</h4>
      </div>
    </div>
  );
};

export default Exploreitems;
