import React, { useCallback, useEffect, useState } from 'react';



function App() {
  const [quote, setQuote] = useState("");
  const [athour, setAthour] = useState("");
  const [color, setColor] = useState("");


  const fetchAPI = useCallback(() => {
    const arrColor = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
    ];
    let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then(res => res.json())
      .then((result) => {
        const data = result.quotes;
        const quoteNumber = Math.floor(Math.random() * data.length);
        const randomQuote = data[quoteNumber];
        const randomColor = arrColor[Math.floor(Math.random() * arrColor.length)];

        console.log("quote: " + randomQuote.quote + "    " + "athour: " + randomQuote.author);
        setQuote(randomQuote.quote);
        setAthour(randomQuote.author);
        setColor(randomColor);
        // console.log(randomColor);
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  useEffect(() => {
    fetchAPI();
  }, [])

  return (
    <div className=" fixed -inset-y-0 -inset-x-0" style={{color: color, background: color, transition: '3s'}} >
      <div className="flex py-40 justify-center content">
        <div className="block bg-white w-3/5 lg:w-2/6 border-2 rounded-lg z-20 shadow-2xl mt-auto p-5">
          <div className="text-center">
            <i className="fas fa-quote-left float-left p-2 text-3xl"></i>
            <p>{quote}</p>
          </div>
          <div className="py-3">
            <p className="w-full text-right text-xs">_ {athour} _</p>
          </div>
          <div className="flex mt-2">
            <div className="w-1/2 py-1">
              {/* <a href=""> */}
              <i className="fab fa-twitter-square text-3xl mr-2"></i>
              {/* </a> */}
              {/* <a href=""> */}
              <i className="fab fa-facebook-square text-3xl"></i>
              {/* </a> */}
            </div>
            <div className="w-1/2 py-1">
              <button
                className="rounded-lg py-1 px-2 h-7 float-right"
                style={{ background: color, transition: '3s'}}
                onClick={() => fetchAPI()}
              >
                <p className="text-xs text-white font-medium" >new quote</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
