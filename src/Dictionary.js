import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    //   response that is sent by axios
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function wordSubmit(event) {
    event.preventDefault();
    search();
  }

  function wordSearch(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={wordSubmit}>
          <h5>What word do you want to look up?</h5>
          <input
            type="search"
            autoFocus={true}
            defaultValue={props.defaultKeyword}
            required
            onChange={wordSearch}
          />
        </form>
        <section>
          <Results results={results} />
        </section>

        {/* any time the state changes, the information in return will re-compiled/ re-rendered with the new data */}
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
