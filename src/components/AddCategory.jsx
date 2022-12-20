import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

  //cada componente puede tener su propio estado Hooks, useStates
  const [inputValue, setInputValue] = useState('One Puch')

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    // console.log(inputValue); 
    //  No adiciona valores vacios, debe ser mas de 1
    if( inputValue.trim().length <= 1 ) return;
    // setCategories( categories => [ inputValue, ...categories ]);
    onNewCategory( inputValue.trim() );
    // limpiar cada vez que presiono enter
    setInputValue('');
  }

  return (
    // <form onSubmit={ (event) => onSubmit(event) }>
    <form onSubmit={ onSubmit }>
    <input 
      type="text"
      placeholder="Buscar gifs"
      value={ inputValue }
      onChange={ onInputChange }
    />
    </form>
  )
}
