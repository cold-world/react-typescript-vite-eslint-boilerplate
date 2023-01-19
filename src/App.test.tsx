import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

test('Counter increment by 1', async () => {
  render(<App />);
  const button = screen.getByText('0');
  expect(button.textContent).toBe('0');
  act(() => {
    button.click();
  });
  await waitFor(() => expect(button.textContent).toBe('1'));
});
