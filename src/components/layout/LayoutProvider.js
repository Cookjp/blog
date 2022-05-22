import React from 'react';
import './layout.css';
import Coffee from 'Components/BuyMeACoffee';

export default function Layout({ children }) {
  return (
    <>
      <div>{children}</div>
      <Coffee />
    </>
  );
}
