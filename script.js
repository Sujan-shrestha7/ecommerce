const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.button');
const loginClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    } );

loginLink.addEventListener('click',()=>{
wrapper.classList.remove('active');
    } );
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    } );

loginClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    } );        


// JavaScript code for toggling user profile visibility
var userProfile = document.getElementById('userProfile');
var buttonn = document.querySelector('.buttonn');
;