import { render, screen } from '@testing-library/react';
import jest from '@testing-library/jest-dom/extend-expect';
import App from './App';
import test from 'jest';
import expect from 'expect';



jest.mock('swr', () => ({
  __esModule: true,
  default: jest.fn(() => ({ data: { message: 'Hello from server!' }, error: null })),
}));

test('renders message from server', () => {
  render(<App />);
  const messageElement = screen.getByText(/Hello from server!/i);
  expect(messageElement).toBeInTheDocument();
});
