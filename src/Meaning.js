import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <div className="definition">
              <span className="definition-title">
                <strong>Definition: </strong>
              </span>
              {definition.definition}
            </div>
            <div className="example">
              {/* <span className="example-title">
                <strong>Example: </strong>
              </span> */}
              <em>{definition.example}</em>
            </div>
            <div className="synonyms">
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
