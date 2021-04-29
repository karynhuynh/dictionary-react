import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function wordSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function wordSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={wordSubmit}>
        <input type="search" autoFocus={true} required onChange={wordSearch} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
