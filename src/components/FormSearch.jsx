import { useRef } from "react"
import './styles/FormSearch.css';

const FormSearch = ( { setLocationSelected } ) => {
    const inputSearch = useRef()

     const handleSubmit = e => {
        e.preventDefault()
        setLocationSelected(inputSearch.current.value.trim())
     }
  return (
    
   <div className="container">
    <section>
      <img className="image" src="imagenFondo.jpg" alt="" />
    </section>
    <br />
   
   <form className="form" onSubmit={handleSubmit}>
        <input className="form__input" ref={inputSearch} type="text" />
        <button className="form__btn">Search</button>
    </form>

    </div>
    
   
   
  )
}

export default FormSearch