import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChalkboardTeacher,
    faUserGraduate,
    faUsers,
    faClipboardList,
    faClock,
    faSlidersH,
    faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import BasicTable from './UserTable';

interface NavItem {
    name: string;
    icon: any;
}

const topItems: NavItem[] = [
    { name: 'Teachers', icon: faChalkboardTeacher },
    { name: 'Students', icon: faUserGraduate },
    { name: 'Groups', icon: faUsers },
    { name: 'Exams', icon: faClipboardList },
    { name: 'Scheduled Exams', icon: faClock }
];

const bottomItems: NavItem[] = [
    { name: 'Settings', icon: faSlidersH },
    { name: 'Logout', icon: faSignOutAlt }
];

const Navbar: React.FC = ({  }) => {
    const [activeItem, setActiveItem] = useState<string>('Teachers');

    const handleItemClick = (name: string) => {
        setActiveItem(name);
    };

    const renderContent = () => {
        if (activeItem === 'Teachers') {
            return <div> < BasicTable title="Teacher" /> </div>;
        } else if (activeItem === 'Students') {
            return <div> < BasicTable title="Students" /></div>;
        } else if (activeItem === 'Groups') {
            return <div> < BasicTable title="Groups" /></div>;
        } else if (activeItem === 'Exams') {
            return <div> < BasicTable title="Exams" /></div>;
        } else if (activeItem === 'Scheduled Exams') {
            return <div> < BasicTable title="Scheduled Exams" /></div>;
        } else if (activeItem === 'Settings') {
            return <div>Settings Content</div>;
        } else if (activeItem === 'Logout') {
            return <div>Logout Content</div>;
        }
    };

    return (
        <div className="navbar-container">
            <div className="navbar">
                <ul className="navbar-top">
                    {topItems.map((item, index) => (
                        <li 
                            key={index} 
                            className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
                            onClick={() => handleItemClick(item.name)}
                        >
                            <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                            {item.name}
                        </li>
                    ))}
                </ul>
                <ul className="navbar-bottom">
                    {bottomItems.map((item, index) => (
                        <li 
                            key={index} 
                            className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
                            onClick={() => handleItemClick(item.name)}
                        >
                            <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="main-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Navbar;



