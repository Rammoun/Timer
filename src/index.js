import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const ZeroNb=()=>{
    return <span className='zero'>00</span>
}
const Thirty=()=>{
    return <span className='thirty'>:30:</span>
}
const Txt=()=>{
    return <h6 className='txt'>Hours Minutes Seconds</h6>
}
ReactDOM.render(
    <div className='full'>
     <div className='digits'>
      <ZeroNb/><Thirty/><ZeroNb/>
     </div>
     <Txt/>
    </div>, 
    document.getElementById('root')
)


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
