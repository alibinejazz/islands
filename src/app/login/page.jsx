/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const Vacations = () => {
  const beachIslands = [
    {
      name: "Scotland Island",
      image:
        "https://images.unsplash.com/photo-1611222566360-ef1f0a8c6451?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjB2aWV3fGVufDB8fDB8fHww",
      area: "Sydney, Australia",
    },
    {
      name: "The Charles Grand Brasserie& Bar",
      image:
        "https://www.shutterstock.com/image-photo/nature-landscape-view-beautiful-tropical-600nw-1940029552.jpg",
      area: "Loren Ipsum, Dolor",
    },
    {
      name: "Bridge Climb",
      image:
        "https://img.freepik.com/premium-photo/beautiful-beach-view-nice-tropical-beach-with-palms-around_87394-8013.jpg",
      area: "Dolor, Sit Amet",
    },
    {
      name: "Scotland Island",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTIiPIx728B3eQJZd89lllIfm_tiYaLFdiiQ&s",
      area: "Sydney, Australia",
    },
    {
      name: "Clam Bar",
      image:
        "https://www.choicehotels.com/cms/images/choice-hotels/explore/image_explore_san-diego-beaches-sunset_header/image_explore_san-diego-beaches-sunset_header.jpg",
      area: "Etcetera veni, Vidi vici",
    },
    {
      name: "Vivid Festival",
      image: "https://media.timeout.com/images/106031426/750/422/image.jpg",
      area: "Sydney, Australia",
    },
  ];

  return (
    <div className="p-8 bg-white min-h-screen max-sm:p-0">
      <div className="flex flex-wrap gap-8">
        {beachIslands.map((island, index) => (
          <div
            key={index}
            className="bg-white rounded-lg  flex w-full max-sm:h-[115px] transition duration-300 ease-in-out hover:bg-gray-50"
            draggable="true"
          >
            <img
              src={island.image}
              alt={island.name}
              className="w-1/2 h-auto rounded-2xl object-cover p-2 max-sm:w-[110px] max-md:w-[110px]"
            />
            <div className="p-4 flex flex-col justify-center w-1/2">
              <h2 className="text-xl font-semibold max-sm:text-md max-md:text-lg">
                {island.name}
              </h2>
              <div className="flex items-center opacity-50">
                <IoLocationOutline />
                <h1>{island.area}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vacations;
