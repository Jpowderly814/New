import { React } from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText('Home Landing Page')).toBeInTheDocument();
  });
});
