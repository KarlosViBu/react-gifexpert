import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

  // const [counter, setCounter] = useState(10);

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      {/* <h5>{ counter }</h5> */}
      {/* <button onClick={ () => setCounter( counter + 1)} >+1</button> */}
      <h3>{ category }</h3>
      {
        // isLoading
        // ? ( <h2>Cargando...</h2> )
        // : null
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className="card-grid">
        {
          images.map( ( image ) => (
            <GifGridItem 
            key={ image.id }
            // title= { image.title }
            // url= { image.url }
            // enviar todas las props
            { ...image }
            />
           ))
        }
      </div>
    </>
  )
}
