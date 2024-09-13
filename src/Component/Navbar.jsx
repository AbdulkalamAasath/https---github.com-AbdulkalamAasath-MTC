import React, { useState } from 'react';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDashDropdown, setShowDashDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setShowDashDropdown(false);
    };

    const toggleDashboard = () => {
        setShowDashDropdown(!showDashDropdown);
        setShowDropdown(false);
    };

    const closeDropdown = (event) => {
        if (!event.target.matches('.dropbtn')) {
            setShowDropdown(false);
            setShowDashDropdown(false);
        }
    };

    return (
        <div onClick={closeDropdown} style={styles.navbar}>
            <style>{`
                .dropbtn {
                    background-color: #fefefe;
                    border: none;
                    font-weight: bold;
                    cursor: pointer;
                    padding: 0.5em;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                
                .dropbtn:hover {
                    background-color: #ddd;
                    color: #000;
                }
                
                .dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: white;
                    min-width: 160px;
                    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
                    z-index: 1;
                    border-radius: 4px;
                    overflow: hidden;
                }
                
                .dropdown-content a {
                    padding: 12px 16px;
                    display: block;
                    text-decoration: none;
                    color: black;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                
                .dropdown-content a:hover {
                    background-color: #f1f1f1;
                    color: #000;
                }
                
                .right-menu .menu-item {
                    text-decoration: none;
                    color: black;
                    font-weight: bold;
                    padding: 0.5em;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }
                
                .right-menu .menu-item:hover {
                    background-color: #f1f1f1;
                    color: #000;
                }
            `}</style>
            <div className="left-menu" style={styles.leftMenu}>
                <div className="dropdown" style={styles.dropdown}>
                    <button
                        className="dropbtn"
                        onClick={toggleDashboard}
                    >
                        Dashboard
                    </button>
                    {showDashDropdown && (
                        <div className="dropdown-content" style={styles.dropdownContent}>
                            <a href="/Folio-Details">Folio Details</a>
                        </div>
                    )}
                    <button
                        className="dropbtn"
                        onClick={toggleDropdown}
                    >
                        Enquiry
                    </button>
                    {showDropdown && (
                        <div className="dropdown-content" style={styles.dropdownContent}>
                            <a href="/Enquiry-Entry">Enquiry Entry</a>
                            <a href="/New-Folio">New Folio Entry</a>
                            <a href="/Supplier-Enquiry">Supplier Entry</a>
                            <a href="/List-enquiry">List Enquiry</a>
                        </div>
                    )}
                </div>
            </div>
            <div className="right-menu" style={styles.rightMenu}>
                <a href="#" className="menu-item">TTS-ABV7FIRM</a>
                <span className="avatar" style={styles.avatar}>👤</span>
            </div>
        </div>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fefefe',
        padding: '1em',
        borderBottom: '1px solid #ddd',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    leftMenu: {
        display: 'flex',
        alignItems: 'center',
    },
    dropdown: {
        position: 'relative',
        display: 'inline-block',
    },
    dropdownContent: {
        display: 'block',
    },
    rightMenu: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        fontSize: '24px',
        cursor: 'pointer',
    },
};

export default Navbar;
