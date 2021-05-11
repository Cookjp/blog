import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = render(
      <Home />,
    );
    expect(tree).toMatchSnapshot();
  });
});
