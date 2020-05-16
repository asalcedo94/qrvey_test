import React, { Component } from "react";
import SearchInput from "./SearchInput";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="component-header">
        <SearchInput/>
      </header>
    );
  }
}
