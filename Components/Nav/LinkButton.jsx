import Link from "next/link";
import React from "react";

const LinkButton = ({ title, link }) => {
  return (
    <li className="text-white hover:text-indigo-200">
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default LinkButton;
