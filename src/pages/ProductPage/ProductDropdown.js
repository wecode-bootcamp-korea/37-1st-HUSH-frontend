import React from 'react';

function Dropdown({ visibility, children }) {
  return <article>{visibility && children}</article>;
}

export default Dropdown;
