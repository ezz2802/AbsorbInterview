import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import React from 'react';

test('renders 404 - Page Not Found', () => {
  render(<NotFound />);
  const headingElement = screen.getByText(/404 - Page Not Found/i);
  const paragraphElement = screen.getByText(/The page you are looking for does not exist./i);
  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});