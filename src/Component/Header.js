import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header style={headStyle}>
                Add, Delete and check your item
            </header>
        )
    }
}
const headStyle = {
    padding: '10px 0',
    textAlign: 'center',
    background: 'green',
    color: '#fff'
}
export default Header
