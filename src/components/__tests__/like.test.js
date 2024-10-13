import { render, fireEvent } from '@testing-library/react';
import Like from '../like';

describe('Like Component Tests', () => {

  test('muestra el valor por defecto "Likes: 0"', () => {
    const { getByText } = render(<Like />);
    expect(getByText(/Likes: 0/i)).toBeInTheDocument();
  });

  test('incrementa likes al hacer clic en el botón Like', () => {
    const { getByText, getByTestId } = render(<Like />);
    const likeButton = getByTestId('like-btn');
    fireEvent.click(likeButton);
    expect(getByText(/Likes: 1/i)).toBeInTheDocument();
  });

  test('decrementa likes al hacer clic en el botón Dislike', () => {
    const { getByText, getByTestId } = render(<Like />);
    const likeButton = getByTestId('like-btn');
    const dislikeButton = getByTestId('dislike-btn');

    // Incrementa primero
    fireEvent.click(likeButton);
    fireEvent.click(dislikeButton);
    expect(getByText(/Likes: 0/i)).toBeInTheDocument();
  });
});
