import React from "react"
import "./menu.css"

function Menu() {
  return (
    <div className='menu-container'>
        <div className='logo'>
            <h1>N</h1>
        </div>
        <div className='menu'>
            <ul><a href="!#">About</a></ul>
            <ul><a href="!#">Home</a></ul>
            <ul><a href="!#">Protfilio</a></ul>
            <ul><a href="!#">Contact us</a></ul>
        </div>
    </div>
  );
}
export default Menu;
