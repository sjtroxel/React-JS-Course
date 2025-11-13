import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {

    /**
     * Challenge: see if you can remember how to grab an array of checked
     * items from the dietaryRestrictions checkboxes.
     */


  function signUp(formData) {
    // console.log(Object.fromEntries(formData))   
            // ^^ but selecting multiple-checkboxes (dietaryRestrictions) still returns only one
    
            // so we have to do this v v
        const data = Object.fromEntries(formData)
        const dietaryData = formData.getAll("dietaryRestrictions")
        console.log(data)       // shows only gluten-free
        const allData = {
            ...data, dietaryRestrictions: dietaryData
        }
        console.log(allData)    // shows all the dietaryRestrictions boxes I checked

    // const email = formData.get("email")
    // const password = formData.get("password")
    // const employmentStatus = formData.get("employmentStatus")
    // const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    // const favColor = formData.get("favColor")
    // console.log(password)
    // console.log(email)
    // console.log(employmentStatus)
    // console.log(dietaryRestrictions)
    // console.log(favColor)
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>

        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@schmoe.com" />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password" />

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" defaultValue="This is a description."></textarea>

        <fieldset>
            <legend>Employment Status:</legend>
        <label>
            <input type="radio" name="employmentStatus" value="unemployed" defaultChecked={true} />
            Unemployed
        </label>
        <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-Time
        </label>
        <label>
            <input type="radio" name="employmentStatus" value="full-time" />
            Full-Time
        </label>
        </fieldset>

        <fieldset>
            <legend>Dietary Restrictions:</legend>
        <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
        </label>
        <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
        </label>
        <label>
            <input type="checkbox" name="dietaryRestrictions" value="gluten-free" defaultChecked={true} />
            Gluten-Free
        </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="" required>
            <option value="" disabled>-- Choose a color! --</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
        </select>

        <button>Submit</button>

      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;

/**
 * {
  "email": "joe@schmoe.com",
  "password": "password123",
  "description": "This is a description.",
  "employmentStatus": "unemployed",
  "dietaryRestrictions": "gluten-free",
  "favColor": "violet"
}
 * Object { email: "joe@schmoe.com", password: "password123", description: "This is a description.", employmentStatus: "unemployed", dietaryRestrictions: "gluten-free", favColor: "violet" }
index.jsx:15:13
 */