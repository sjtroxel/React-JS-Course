function addTwoNumbers(a, b) {
    // DON'T DO THIS
    a = 42
    return a + b
}

console.log(addTwoNumbers(1, 2))

function Navbar(props) {
    // DON'T DO THIS
    props.logoIcon = "some-other-icon.png"
}

<Navbar logoIcon="spatula.png" />

// -------------

{/* <App darkMode={false} /> */}