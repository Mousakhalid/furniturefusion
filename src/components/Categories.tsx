import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="grid md:grid-cols-4 p-14">
      <div>
        <Image
          src={"/cat-1.jpg"}
          alt="Image 1 Categories"
          width={300}
          height={600}
        />
        <Link
          href={"#"}
          className="underline text-neutral-800 font-medium text-lg"
        >
          SOFA
        </Link>
      </div>
      <div>
        <Image
          src={"/cat-4.jpeg"}
          alt="Image 4 Categories"
          width={300}
          height={600}
        />
        <Link
          href={"#"}
          className="underline text-neutral-800 font-medium text-lg"
        >
          SOFA
        </Link>{" "}
      </div>{" "}
      <div>
        <Image
          src={"/cat-1.jpg"}
          alt="Image 1 Categories"
          width={300}
          height={600}
        />
        <Link
          href={"#"}
          className="underline text-neutral-800 font-medium text-lg"
        >
          SOFA
        </Link>
      </div>
      <div>
        <Image
          src={"/cat-4.jpeg"}
          alt="Image 4 Categories"
          width={300}
          height={600}
        />
        <Link
          href={"#"}
          className="underline text-neutral-800 font-medium text-lg"
        >
          SOFA
        </Link>{" "}
      </div>
    </div>
  );
};

export default Categories;
