import React from 'react';
import {getFunName} from '../helpers';

export class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        // 1. Stop form from submitting
        event.preventDefault();

        // 2. Get text from input
        const storeName = this.myInput.value.value;

        // 3. Change page to /store/:input-name
        this.props.history.push(`/store/${storeName}`);
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                { /* Fragment allows multiple siblings */ }
                <h1>Welcome to the Website!</h1>

                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter A Store</h2>

                    {/* Note, if you call a function with (), it will run on mount. However, not using () will make it run on trigger. */}
                    <input type="text" ref={this.myInput} required placeholder="Store Name" name="" id="" defaultValue={ getFunName() } />
                    <button type="submit">Visit Store</button>
                </form>
            </React.Fragment>
            
        )
    }
}