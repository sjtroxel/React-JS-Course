import ReactDOM from 'react-dom/client';

function App() {
  
    function handleClick() {
        console.log("I was clicked!")
    }
  
  /**
   * Challenge: add our new function to the button
   */

  /**
   * Challenge: Log something to the console when the mouse
   * hovers over the image!
   */

    function handleMouseOver() {
        console.log("I was hovered!")
    }
  
  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick}>Click me</button>
      {/* <button onClick={function() {console.log("Clicked!")}}>Click me</button> */}
    </main>
  )
}

// someElement.addEventListener("click", function() {})

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App

// import ReactDOM from 'react-dom/client';
// import App from "./App"

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);