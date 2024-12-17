// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// Filename - src/index.js: 

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';

 
// class App extends React.Component 
// {
   
//     onInputChange(event) 
//     {
//         console.log(event.target.value);
//     }
   
//     render() 
//     {
//         return (
//             <div>
//                 <form>
//                     <label>Enter text</label>
//                     <input type="text" onChange={this.onInputChange}/>
//                 </form>
//                 {/* <Greet/> */}
//             </div>
//         )
//     }
// }
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css'; // Optional CSS for styling
// import App from './App'; // Main App component (using class components)

// // Get the root DOM element
// const rootElement = document.getElementById('root');

// // Create a root and render the App component
// const root = createRoot(rootElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
