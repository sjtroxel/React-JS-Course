import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState([])
    
    /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     */

    /**
     * Challenge:
     * If there are 0 unread messages, display a paragraph that says "You
     * have no unread messages." (So, the logic will be the opposite of what
     * we have for the h1.)
     */

    console.log(setUnreadMessages)

    return (
        <div>
            {unreadMessages.length > 0 && (
            <h1>You have {unreadMessages.length} unread messages!</h1>
            )}

            {unreadMessages.length === 0 && (
                <p>You have no unread messages.</p>
            )}

            {unreadMessages.length && 
            <h1>You have {unreadMessages.length} unread messages!</h1>}
        </div>
    )
}