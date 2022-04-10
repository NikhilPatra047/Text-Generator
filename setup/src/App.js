import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    setText(data.slice(0, amount));
    setCount(0);
  }

  const handleChange = (e) => {
    let newValue = e.target.value;
    if(newValue > data.length) {
      newValue = data.length;
    } 
    if(newValue < 0) {
      newValue = 0;
    }

    setCount(newValue);
  }
  
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">
          Paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count}
          onChange={handleChange}
        />
        <button type="submit" className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          );
        })}
      </article>
    </section>

  );
}

export default App;
