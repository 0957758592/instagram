import React from 'react';

function Header({ user, setUser }) {


    function handleClick(e) {
        setUser("")
    }

    return (
        <div >
            Welcome {user}
            <button onClick={handleClick}>Logout</button>
        </div>
    );
}

export default Header;