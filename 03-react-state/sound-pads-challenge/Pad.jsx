import React from "react"

export default function Pad(props) {

    /**
     * Challenge part 3:
     * Our buttons got turned off by default! Update the code
     * so if the button is "on", it has the className of "on".
     */

    /**
     * Challenge part 4:
     * Create state controlling whether this box is "on" or "off".
     * Use the incoming `props.on` to determine the initial state.
     * Create an event listener so when the box is clicked, it
     * toggles from "on" to "off".
     * Goal: clicking each box should toggle it on and off.
     */

    // console.log(props.id)

    // const [on, setOn] = React.useState(props.on)

    const className = props.on ? "on" : undefined
    
    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }
    // console.log(setOn)

    // function handleClick() {
    //     props.toggle(props.id)
    //     toggle()
    // }

    return (
        <button 
            className = {className}
            style = {{backgroundColor: props.color}}
            // onClick = {props.toggle()}
            onClick = {() => props.toggle(props.id)}
        >
            {props.id}
        </button>
    )
}