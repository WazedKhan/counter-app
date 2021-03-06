import React, { Component } from 'react';


class Counter extends Component {

    state = {
        count:0,
        btn_name : 'Increment',
        imageUrl : 'https://picsum.photos/200',
        tags: ['tag1', 'tag2', 'tag3']
    };

    handleIncrement = product => {
        console.log(product)
        this.setState({ count: this.state.count + 1 })
    }


    render() {
        return (
            <div>
                <span className={ this.getBadgeClasses() }>
                {this.formatCount()}
                </span>
                <button onClick={() => this.handleIncrement({id:1 })} className='btn btn-secondary btn-sm m-2'> {this.state.btn_name} </button>
                <ul>
                    {this.state.tags.map(tag => <li key = {tag}> {tag} </li>)}
                </ul>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        // return this.state.count === 0 ? 'zero' : this.state.count
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;