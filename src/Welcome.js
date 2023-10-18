import React from "react";

export default function Welcome() {
    // return React.createElement('h1', 
    // { className: 'admin', id: 'first' }, 
    // 'Welcome World')
    return React.createElement(
        'ul',
        null,
        React.createElement('h1', null, 'Items in the list'),
        React.createElement('li', null, 'Item one'),
        React.createElement('li', null, 'Item two')
    )
}