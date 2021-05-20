import React, { useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    //   response that is sent by axios
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    //documentation: https://www.pexels.com/api/documentation/
    const pexelsApiKey =
      "563492ad6f917000010000017f8eb52fa59540a9b3c4e9b9466289b8";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
          <h2>What word do you want to look up?</h2>
          <input
            type="search"
            autoFocus={true}
            defaultValue={props.defaultKeyword}
            required
            onChange={wordSearch}
          />
          <div className="hint">
            suggested words: water, ice cream, puppy...
          </div>
        </form>
        <section>
          <div className="dictionary-info">
            <div className="results-info">
              <Results results={results} />
            </div>
            <div className="results-photos">
              <Photos photos={photos} />
            </div>
          </div>
        </section>

        {/* any time the state changes, the information in return will re-compiled/ re-rendered with the new data */}
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
