import React, {useState} from 'react';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
    const [score, setScore] = useState(0);

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
