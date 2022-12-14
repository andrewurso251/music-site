import React from 'react';
import {  Link } from "react-router-dom";


const Navbar = () => {
return (
	<>
	
    <div style = {styles.navigationContainer}>
        <li>
            <h2 style = {styles.navItem}>jDogs</h2>
        </li>
        <li>
            <h2>Cats</h2>
        </li>
        <li>
            <h2>Sheeps</h2>
        </li>
        <li>
            <h2>Goats</h2>
        </li>
    </div>
        
    </>
);
}




export default Navbar;


const styles = {
    navigationContainer : {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#404040',
        width : '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    navItem : {
        marginRight: 20
    }

}