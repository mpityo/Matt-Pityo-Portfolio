import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function Footer () {
    return (
        <footer className='d-flex justify-content-center p-1 mt-1 w-100'>
            <a href="https://github.com/mpityo" target="_blank" rel='noreferrer'><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/matt-pityo-ba6518195/" target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
        </footer>
    );
};

export default Footer;