import Link from "next/link";
import React from "react";
import FooterLogo from "./FooterLogo";
import LinkButton from "./LinkButton";

const Footer = () => {
  return (
    <footer
      className="container m-auto block p-4 bg-white rounded-lg md:px-6 md:py-8 dark:bg-gray-900"
      style={{ boxShadow: "0px 0px 10px 5px #e9e9e9" }}
    >
      <div className="sm:flex sm:items-center sm:justify-between">
        <FooterLogo />
        <ul className="flex item-center justify-center flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <LinkButton title={"About"} link={"/"} style={""} />
          <LinkButton title={"Privacy Policy"} link={"/"} style={""} />
          <LinkButton title={"Licensing"} link={"/"} style={""} />
          <LinkButton title={"Contact"} link={"/"} style={""} />
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
        © 2022{" "}
        <Link href="/">
          <a className="hover:underline">Trello App™</a>
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
