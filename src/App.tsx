import React from 'react';
import './App.css';

function App() {

    return (
    <div className="App">
        <pre>
            <div><span className="type">const</span> <span className="var">me</span> = &#123;</div>
            <div><span className="param">  firstName</span>: <span className="string">'Daniel'</span>,</div>
            <div><span className="param">  lastName</span>: <span className="string">'Volkonesko'</span>,</div>
            <div><span className="param">  age</span>: <span className="number">29</span>,</div>
            <div><span className="param">  sex</span>: <span className="string">'male'</span>,</div>
            <div><span className="param">  city</span>: <span className="string">'Armavir'</span>,</div>
            <br/>
            <div><span className="param">  technicalSkills</span>: [</div>
            <div>    <span className="string">'JavaScript'</span>, <span className="string">'TypeScript'</span>, <span className="string">'React'</span>,</div>
            <div>    <span className="string">'HTML'</span>, <span className="string">'CSS'</span>, <span className="string">'Pug'</span>,</div>
            <div>    <span className="string">'SASS'</span>, <span className="string">'Redux Toolkit'</span>, <span className="string">'PostgreSQL'</span>,</div>
            <div>    <span className="string">'Webpack'</span>, <span className="string">'GIT'</span>, <span className="string">'Figma'</span></div>
            <div>  ],</div>
            <br/>
            <div><span className="param">  familiarWith</span>: [</div>
            <div>    <span className="string">'Node.js'</span>,</div>
            <div>    <span className="string">'Express'</span>,</div>
            <div>    <span className="string">'C'</span></div>
            <div>  ],</div>
            <br/>
            <div><span className="param">  commonSkills</span>: [</div>
            <div>    <span className="string">'Hard work'</span>, <span className="string">'Learnability'</span>, <span className="string">'Discipline'</span>,</div>
            <div>    <span className="string">'Curiosity'</span></div>
            <div>  ],</div>
            <br/>
            <div><span className="param">  acceptable</span>: &#123;</div>
            <div><span className="param">    kindОfWork</span>: [</div>
            <div>      <span className="string">'Full-time employment'</span>,</div>
            <div>      <span className="string">'Part-time employment'</span></div>
            <div>    ],</div>
            <div><span className="param">    workSchedule</span>: [</div>
            <div>      <span className="string">'Remote work'</span></div>
            <div>    ],</div>
            <div>  &#125;,</div>
            <br/>
            <div><span className="param">  desiredPositions</span>: [</div>
            <div>    <span className="string">'Frontend Developer'</span></div>
            <div>  ],</div>
            <br/>
            <div><span className="param">mail</span>: <span className="string">'eclipsemod-post@yandex.ru'</span>,</div>
            <div><span className="param">github</span>: <span className="string">'https://github.com/eclipsemode'</span>,</div>
            <div><span className="param">telegram</span>: <span className="string">'@DanielKomnin'</span></div>
            &#125;
        </pre>
    </div>
  );
}

export default App;
