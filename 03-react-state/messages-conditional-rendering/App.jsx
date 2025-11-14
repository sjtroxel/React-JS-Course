import React from "react";

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b", "x"])

    console.log(setMessages)

    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there's exactly 1 unread message, it should read "You have 
     *   1 unread message" (singular)
     * - If there are > 1 unread messages, display "You have <n> unread
     *   messages" (plural)
     */

    return (
        <div>
            <h1>
                {
                    messages.length === 0
                    ? "You're all caught up!" 
                    : messages.length === 1
                        ? "You have 1 unread message."
                        : `You have ${messages.length} unread messages.`
                }
            </h1>
        </div>
    )

    
    // let messageText
    // if (messages.length === 0) {
    //     messageText = "You're all caught up!"
    // } else if (messages.length === 1) {
    //     messageText = "You have 1 unread message."
    // } else {
    //     messageText = `You have ${messages.length} unread messages!`
    // }

    // console.log(setMessages)

    // return (
    //     <div>
    //         <h1>{messageText}</h1>
    //     </div>
    // )
}