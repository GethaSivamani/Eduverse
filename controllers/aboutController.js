const express = require('express');

// Controller function to render the About page
const getAboutPage = (req, res) => {
    res.render('about', { title: 'About Us' });
};

module.exports = { getAboutPage };