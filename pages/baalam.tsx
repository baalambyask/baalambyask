import React from 'react';
import BallamPage from '../components/BallamPage';

const Baalam: React.FC = () => <BallamPage onBack={() => { window.location.href = '/'; }} />;

export default Baalam;
