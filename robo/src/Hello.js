import React, {Component} from 'react';
import './Hello.css';

const Hello = (props) =>{
        return(
            <div className='f1 tc'>
                <h1>Hello World</h1>
                 <p> {props.prp}</p>
                 <p>{props.dog}</p>
            </div>
        );
}
export default Hello;