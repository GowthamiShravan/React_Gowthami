

// ReactElement(object) => HTML(Browser Understands)

const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
        "div",
        {id : "child"},
        [React.createElement("h1", {}, "I am an nested h1 tag"), React.createElement("h2", {}, "I am an mested h2 tag")
    ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);











// const heading = React.createElement("h1", {}, "Hello every one from React");
//     // 
//     const root =  ReactDOM.createRoot(document.getElementById("root"));
//     // passing a react element inside the root
//     root.render(heading) 

// const heading1 = React.createElement("h1", {}, "Hello every one from React, am heading 2");
// // 
// const root1 =  ReactDOM.createRoot(document.getElementById("root1"));
// // passing a react element inside the root
// root.render(heading1)