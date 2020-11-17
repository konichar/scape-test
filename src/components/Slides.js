import React, {useState} from 'react';

function Slides({slides}) {
    const [index, setIndex] = useState(0);

    const restart = () => {
        setIndex(0);
    };
    const prev = () => {
        // if (index === 0) {
        //     setIndex(4);
        // } else {
        // }
        setIndex(index - 1);
    };
    const next = () => {
        // if (index === 4) {
        //     setIndex(0);
        // } else {
        // }
        setIndex(index + 1);
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined " disabled={slides[0] === slides[index]  ? true : ""}  onClick={restart} >Restart</button>
                <button data-testid="button-prev" className="small" disabled={slides[0] === slides[index]  ? true : false} onClick={prev}>Prev</button>
                <button data-testid="button-next" className="small" disabled={slides[slides.length - 1] === slides[index] ? true : false}  onClick={next}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index].title}</h1>
                <p data-testid="text">{slides[index].text} </p>
            </div>
        </div>
    );

}

export default Slides;
