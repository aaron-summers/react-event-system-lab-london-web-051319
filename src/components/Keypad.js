// Code Keypad Component Here
import React from 'react';


export default class Keypad extends React.Component {
    handleKey = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input type="text" onKeyUp={() => {this.handleKey()}} />
            </div>
        )
    }
}
