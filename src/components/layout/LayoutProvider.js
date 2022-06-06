import React from 'react';
import './layout.css';

export default function LayoutProvider({ children }) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
