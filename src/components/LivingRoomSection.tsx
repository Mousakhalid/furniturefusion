import Image from "next/image";
import React from "react";

const LivingRoomSection = () => {
  return (
    <div className="p-14 rounded">
      <div className="grid md:grid-cols-2 grid-cols-1 bg-neutral-50">
        <div>
          <Image
            src={"/living.webp"}
            alt="Living Colletions by Furniture"
            width={700}
            height={700}
          />
        </div>
        <div className="md:p-14 p-4 space-y-5">
          <h1 className="text-3xl font-normal text-neutral-700">
            The Living Room Collection
          </h1>
          <p>
            The Chelsea Sofa & Ottomans shown in White Italian Bouclé with The
            Morro Nesting Tables shown in Charcoal on Ash
          </p>
          <button className="border-solid border-2 border-gray-900 md:px-7 px-4 py-3 hover:bg-stone-800 hover:text-gray-50 rounded-lg duration-300">Shop All Living</button>
        </div>
      </div>
    </div>
  );
};

export default LivingRoomSection;
