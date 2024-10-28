import './App.css';
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";


function App() {
  // function handleKeys() {
    // console.log(document);
    // document.main.label.classList.add('remove');
  // }

  return (
    <div className="App">
      {/* <Routes>
        <Route exact path="/"> */}
          <Header></Header>
          <Main
            // handleKeys={handleKeys}
          />
          <Footer></Footer>
        {/* </Route>
        <Route path="/build">
          <Build />
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
