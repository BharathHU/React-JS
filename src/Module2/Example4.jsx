import cars from '../assets/hero.png'


const Example4 = () => {
  const fun = () => alert('Hello how are you!')

  return (
    <div>
      <h1 className='title' id='heading'>Welcome to JS class</h1>
      <img src={cars} alt="no image" height="200px" width="200px" />
      <button onClick={fun}>Click here</button>
    </div>
  )
}

export default Example4

