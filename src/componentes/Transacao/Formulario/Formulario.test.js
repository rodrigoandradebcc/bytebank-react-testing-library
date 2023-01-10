import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

test('Deve renderizer um campo de input', () => {
  render(<Formulario />);
  const textInput = screen.getByPlaceholderText('Digite um valor');
  expect(textInput).toBeInTheDocument();
});

test('Deve renderizer um campo de input com o type number', () => {
  render(<Formulario />);
  const textInput = screen.getByPlaceholderText('Digite um valor');
  expect(textInput).toHaveAttribute('type', 'number');
});

test('Deve renderizer um campo de input que pode ser preenchido', () => {
  render(<Formulario />);
  const textInput = screen.getByPlaceholderText('Digite um valor');
  userEvent.type(textInput, '50');
});