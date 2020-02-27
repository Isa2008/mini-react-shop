import React, { useEffect } from 'react';
// REDUX
import { connect } from 'react-redux';
// ACTIONS
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';
// import { cleanup } from '@testing-library/react';

function Navbar(props) {
    console.log('Navbar props basketProps: ', props);

    useEffect(() => {
        getNumbers()
    }, [])

    return(
        <header className="App-header">
            <nav>
                <h1 className="nav-title">
                    <Link to="/">React Shop</Link>
                </h1>
                <ul>
                  <li><Link to="/">Shop</Link></li>
                  {/* <li><Link to="/about">About</Link></li> */}
                  <li><Link to="/basket">Basket 🛒 <span>{props.basketProps.basketNumbers}</span></Link></li>
                </ul>
            </nav>
        </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar);