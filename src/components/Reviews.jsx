import React, { useReducer, useState } from 'react';

// Definir el estado inicial para las reseñas
const initialState = {
  reviews: [],
};

// Definir el reducer para manejar las acciones relacionadas con las reseñas
const reviewsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REVIEW':
      return {
        reviews: [...state.reviews, action.payload],
      };
    case 'DELETE_REVIEW':
      return {
        reviews: state.reviews.filter(review => review.id !== action.payload),
      };
    default:
      return state;
  }
};

const Movies = () => {
  // Utilizar useReducer para manejar el estado de las reseñas
  const [state, dispatch] = useReducer(reviewsReducer, initialState);
  
  // Utilizar useState para manejar el estado del formulario
  const [newReview, setNewReview] = useState('');

  // Manejar la creación de una nueva reseña
  const handleAddReview = () => {
    // Generar un ID único para la nueva reseña (puedes usar una biblioteca como uuid)
    const newReviewId = Math.random().toString(36).substring(7);
    
    // Dispatch para agregar la nueva reseña al estado
    dispatch({
      type: 'ADD_REVIEW',
      payload: {
        id: newReviewId,
        text: newReview,
      },
    });

    // Limpiar el campo del formulario después de agregar la reseña
    setNewReview('');
  };

  // Manejar la eliminación de una reseña
  const handleDeleteReview = (id) => {
    // Dispatch para eliminar la reseña del estado
    dispatch({
      type: 'DELETE_REVIEW',
      payload: id,
    });
  };

  return (
    <div>
      <h1>Movies Reviews</h1>
      
      {/* Formulario para agregar una nueva reseña */}
      <div>
        <input
          type="text"
          placeholder="Escribe una reseña"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleAddReview}>Agregar Reseña</button>
      </div>

      {/* Lista de reseñas */}
      <ul>
        {state.reviews.map((review) => (
          <li key={review.id}>
            {review.text}
            <button onClick={() => handleDeleteReview(review.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
