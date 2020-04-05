import React from 'react';
import Header from "./components/Header";
import Headline from "./components/Headline";
import './styles.scss';

const tempArr = [
  {
    fName: 'Keith',
    lName: 'Li',
    email: 'hereiskeith@gmail.com',
    age: 26,
    onlineStatus: true
  }
]

function App() {
  return (
    <div className="App">
      <Header />
      <section className='main'>
        <Headline header='Posts' desc='Click the button to render posts' tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
