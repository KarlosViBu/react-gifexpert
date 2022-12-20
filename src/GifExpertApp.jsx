import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball', 'Valorant', 'Rick and Morty' ]);
  // const onAddCategory = () => {
  //   // categories.push('Valoarant');    Se debe evitar
  //   setCategories([ 'Valorant', ...categories]);
  //   // setCategories([ 'Hola Mundo' ]);
  //   // console.log('Valoarant');
  // }
  
  const onAddCategory= ( newCategory ) => {
      console.log(newCategory);
      // si la categoria ya existe no haga nada
      if ( categories.includes(newCategory)) return;
      setCategories([ newCategory, ...categories]);

  }
  
  console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory 
        onNewCategory={ onAddCategory }
      />
      
      { 
        categories.map( category => ( 
        <GifGrid key={ category } category={ category }/> 
        )) 
      }
      
    </>
  )
}

