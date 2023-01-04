import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// testovi za formu zakazivanja termina
test('da li je isti dan zakazan',()=>{})
test('da li je dan sadasnji',()=>{})
test('da li je isto vreme zakazan',()=>{})
test('da li je u radnom vremenu',()=>{})
test('da li vec postoji takav zahtev',()=>{})

// testovi za korisnika
test('da li je admin',()=>{})
test('koji roll ima',()=>{})
test('da li je ulogovan',()=>{})
test('da li je izlogovan',()=>{})