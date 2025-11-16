import React from "react";

export default function Pad(props) {
    const styles = {
        backgroundColor: props.color
    }

    return (
        <button style={styles}>{props.id}</button>
    )
}