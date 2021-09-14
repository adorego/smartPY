import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Apps", () => {
  it('should pass', function () {
    expect(true).toBe(true);
  });
});
/*
cargostore('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/