import React from 'react';
import './styles.css';

export default function Card(props) {

  function transformSentence(sentence) {
    var str = sentence.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  }

  return (
    <div className="card">
      <div className="card-top">
        <h1>{props.character}</h1>
      </div>
      <div className="card-bottom">
        <div className="title">
          <h2>
            {transformSentence(props.name)}
          </h2>
        </div>
        <div className="specs">
          <ul>
            <li><b>Slug: </b> {props.slug}</li>
            <li><b>Code Point: </b> {props.codePoint}</li>
            <li><b>Group: </b> {props.group}</li>
            <li><b>Sub Group: </b> {props.subGroup}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}