import './Header.css'
import React from 'react';
/*
 -nom app ds header
 -bouton home pour acceder à page home
 -bouton contact pour acceder à contact page


*/
class Header extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            currentPage : "Home"
         };
    }

    handleClick(page, e){
        this.setState({
            currentPage : page
        });
        console.log("Le bouton " + this.state.currentPage +" a été cliqué ");
    }

    render() {
        return (
        <header className="Header">
            <p>App-test</p>
            <button onClick={e => this.handleClick("Home", e)}>
                <p>Home</p>
            </button>

            <button onClick={e => this.handleClick("Contact", e)}>
                <p>Contact</p>
            </button>
        </header> 
        );
    }
}


export default Header;