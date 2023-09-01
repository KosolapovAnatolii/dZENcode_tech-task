import React from "react"
import { TopMenu } from "../TopMenu"
import { Logo } from "../Logo";
import { SearchInput } from "../SearchInput";

export const Header = () => {
  return (
    <header className="header border-bottom">
      <div className="container-xl">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-5 flex-grow-1">
            <Logo />
            <SearchInput />
          </div>
          <TopMenu />
        </div>
      </div>
    </header>
  );
}