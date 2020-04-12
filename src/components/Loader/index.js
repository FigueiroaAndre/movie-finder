import React from 'react';
import { FiLoader } from 'react-icons/fi';
import './styles.css';

export default function Loader(){
    return(
        <FiLoader size={50} className="loader" />
    );
}