import React from 'react';
import AskPage from '../components/AskPage';

const Ask: React.FC = () => <AskPage onBack={() => { window.location.href = '/'; }} />;

export default Ask;
