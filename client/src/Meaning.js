import React from "react";
import Example from "./Example";
import "./Meaning.css";

const Meaning = (props) => {
  return (
    <div className="Meaning-div">
      <h3 className="Meaning-part">{props.data.partOfSpeech}</h3>
      <hr />
      {props.data.definitions.map((definition, index) => {
        return (
          <div key={index} className="Meaning-example">
            {index + 1}. {definition.definition}
            <br />
            <Example data={definition.example} />
          </div>
        );
      })}
    </div>
  );
};

export default Meaning;