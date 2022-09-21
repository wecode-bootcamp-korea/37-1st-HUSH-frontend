import React from 'react';

function Dropdown(props) {
  return <article>{props.visibility && props.children}</article>;
}

export default Dropdown;
