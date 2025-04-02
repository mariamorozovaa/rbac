// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <h1>Hello world</h1>
//        </main>
//     </div>
//   );
// }


// function Header() {
//   return <h1>Develop. Preview. Ship.</h1>;
// }
 
// const root = ReactDOM.createRoot(app);
// root.render(<Header />);

//--------------------------------
// props 

// function Header({ title }) {
//   return <h1>{title ? title : 'Default title'}</h1>;
// }

// function HomePage() {
//   return (
//     <div>
//       <Header title="React" />
//       <Header title="A new title" />
//     </div>
//   );
// }

//--------------------------------
// array 

// function HomePage() {
//   const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
//   return (
//     <div>
//       <Header title="Develop. Preview. Ship." />
//       <ul>
//         {names.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


//--------------------------------
// button

// function HomePage() {
//   // 	...
//   function handleClick() {
//     console.log('increment like count');
//   }
 
//   return (
//     <div>
//       {/* ... */}
//       <button onClick={handleClick}>Like</button>
//     </div>
//   );
// }

//--------------------------------
// State and hooks

// function HomePage() {
//   // ...
//   const [likes, setLikes] = React.useState(0);
//   // ...
 
//   return (
//     // ...
//     <button onClick={handleClick}>Like({likes})</button>
//   );
// }

// function HomePage() {
//   // ...
//   const [likes, setLikes] = React.useState(0);
 
//   function handleClick() {
//     setLikes(likes + 1);
//   }
 
//   return (
//     <div>
//       {/* ... */}
//       <button onClick={handleClick}>Likes ({likes})</button>
//     </div>
//   );
// }

// ---------
// all react (index.html) 

{/* <html>
  <body>
    <div id="app"></div>
 
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
 
    <script type="text/jsx">
      const app = document.getElementById("app")
 
      function Header({ title }) {
        return <h1>{title ? title : "Default title"}</h1>
      }
 
      function HomePage() {
        const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"]
 
        const [likes, setLikes] = React.useState(0)
 
        function handleClick() {
          setLikes(likes + 1)
        }
 
        return (
          <div>
            <Header title="Develop. Preview. Ship." />
            <ul>
              {names.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
 
            <button onClick={handleClick}>Like ({likes})</button>
          </div>
        )
      }
 
      const root = ReactDOM.createRoot(app);
      root.render(<HomePage />);
    </script>
  </body>
</html> */}