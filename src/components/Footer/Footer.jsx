import React from 'react';
import './styles.css';

export default function Footer(props) {
  return (
    <footer>
      <p>
        Copyright © {props.company}
      </p>
    </footer>
  )
}