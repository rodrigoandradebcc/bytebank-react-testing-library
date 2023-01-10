import { render, screen } from '@testing-library/react';
import Menu from './index';


test('Deve renderizar um link para a página inicial', () => {
  render(<Menu />);
  const linkInitialPage = screen.getByText('Inicial');
  expect(linkInitialPage).toBeInTheDocument();
});

test('Deve renderizar uma lista de links', () => {
  render(<Menu />);
  const linkList = screen.getAllByRole('link');
  expect(linkList).toHaveLength(4);
});

test('Não deve renderizar o link para extrato', () => {
  render(<Menu />);
  const extractLink = screen.queryByText('Extrato');
  expect(extractLink).not.toBeInTheDocument();
});

test("Deve renderizar uma lista de links com a classe link", () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
})