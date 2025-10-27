/**
 * Challenge: Build out the main content section!
 * 
 * For now, skip 2 aspects of the design and we'll work on these later:
 *  1. the colored bullets in the list
 *  2. the larger gray React logo on the side
 */


export default function Main() {
   return ( 
   <main>
    <h1>Fun facts about React!</h1>
    <ul className="facts-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
   </main>
   )
}