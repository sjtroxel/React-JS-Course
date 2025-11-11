import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Challenge: add another label and input for the password field
 */

/**
 * Challenge: get the password from the form too and log it to the
 * console to be sure it came in correctly.
 */

function App() {

    function signUp(formData) {
        // event.preventDefault()
        // const formEl = event.currentTarget
        // const formData = new FormData(formEl)
        const email = formData.get("email")
        // gather the info from the form --> submit it to a backend
        console.log(email)
        // formEl.reset()
        const password = formData.get("password")
        console.log(password)
    }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}> 
      {/* <form action="phpfile.php" onSubmit={handleSubmit} method="POST"> */}
        <label htmlFor="email">E-Mail:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        {/* <label>E-Mail:
        <input type="email" name="email" placeholder="joe@schmoe.com" />
        </label> */}<br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <button>Submit</button>

        
      </form>
    </section>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;