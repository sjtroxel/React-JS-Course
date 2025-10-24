1. What is a React component?

A function that returns React elements. (UI)


2. What's wrong with this code?
```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

This is fine except that React requires PascalCase not CamelCase so it's got to be "MyComponent", not "myComponent".


3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <img src="./react-logo.png" width="40px" alt="React logo" />
        </header>
    )
}

root.render(Header())
```

At the end - you don't call the function this way. The correct way is:
root.render(<Header />)