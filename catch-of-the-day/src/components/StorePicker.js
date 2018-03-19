import React from 'react';

export class StorePicker extends React.Component {
    render() {
        return (
            <React.Fragment>
                { /* Fragment allows multiple siblings */ }
                <h1>Welcome to the Website!</h1>
                <form className="store-selector">
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="Store Name" name="" id=""/>
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>
            
        )
    }
}