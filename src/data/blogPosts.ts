const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    summary: "A deep dive into React Hooks and how they can simplify your component logic.",
    content: `
      React Hooks are functions that let you use state and other React features without writing a class. 
      They allow you to manage state and lifecycle events in functional components, making your code cleaner and more readable.
      
      In this post, we'll explore the most commonly used hooks: useState, useEffect, and custom hooks.
      
      ## useState
      The useState hook allows you to add state to your functional components. 
      Here's a simple example:
      
      \`\`\`javascript
      import React, { useState } from 'react';

      const Counter = () => {
        const [count, setCount] = useState(0);

        return (
          <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
          </div>
        );
      };
      \`\`\`

      ## useEffect
      The useEffect hook lets you perform side effects in your components. 
      It can be used for data fetching, subscriptions, or manually changing the DOM.

      ## Custom Hooks
      Custom hooks allow you to extract component logic into reusable functions. 
      This can help you keep your components clean and focused on rendering UI.

      In conclusion, React Hooks provide a powerful way to manage state and side effects in your applications. 
      They promote cleaner code and better separation of concerns.
    `,
    date: "2023-10-01",
    author: "John Doe",
  },
  {
    id: 2,
    title: "CSS Grid vs Flexbox",
    summary: "Comparing CSS Grid and Flexbox for layout design.",
    content: `
      CSS Grid and Flexbox are two powerful layout systems in CSS. 
      While they can be used together, each has its strengths and ideal use cases.

      ## CSS Grid
      CSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns. 
      It's perfect for building web pages with a grid-based design.

      ## Flexbox
      Flexbox is a one-dimensional layout system that excels at distributing space along a single axis. 
      It's great for aligning items in a row or column.

      In general, use CSS Grid for larger layouts and Flexbox for smaller components. 
      Understanding both will give you the flexibility to create responsive designs.
    `,
    date: "2023-10-15",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    summary: "An overview of the new features introduced in ES6.",
    content: `
      ES6, also known as ECMAScript 2015, introduced several new features that make JavaScript more powerful and easier to use.

      ## Arrow Functions
      Arrow functions provide a shorter syntax for writing function expressions. 
      They also lexically bind the this value, making them ideal for use in callbacks.

      ## Template Literals
      Template literals allow for easier string interpolation and multi-line strings.

      ## Destructuring
      Destructuring assignment makes it easier to extract values from arrays or properties from objects.

      These features, among others, have greatly improved the JavaScript development experience. 
      Embracing ES6 can lead to cleaner and more maintainable code.
    `,
    date: "2023-10-20",
    author: "Alice Johnson",
  },
];

export default blogPosts; 
