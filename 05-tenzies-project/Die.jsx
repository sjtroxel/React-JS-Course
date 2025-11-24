import React from 'react'

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <button
            className="die-face"
            style={styles}
            onClick={() => props.hold(props.id)}
        >
            {props.value}
        </button>
    )
}