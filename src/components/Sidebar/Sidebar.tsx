// Sidebar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <Nav className="flex-column custom-sidebar">
      <Nav.Link as={NavLink} to="/" exact style={{ textDecoration: 'none', color: 'black' }}>Главная</Nav.Link>
      <Nav.Link as={NavLink} to="/finance" style={{ textDecoration: 'none', color: 'black' }}>Финансы</Nav.Link>
      <Nav.Link as={NavLink} to="/settings" style={{ textDecoration: 'none', color: 'black' }}>Настройки</Nav.Link>
    </Nav>
  );
};

export default Sidebar;