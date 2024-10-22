const express = require('express');

const getContacts = (req, res) => {
    res.send('Get all contacts');
};

const createContact = (req, res) => {
    console.log(req.body);
    res.status(201).json({message:'Create new contact'});
};

const updateContact = (req, res) => {
    res.send(`Update contact ${req.params.id}`);
};

const deleteContact = (req, res) => {
    res.send(`Delete contact ${req.params.id}`);
};

const getContact = (req, res) => {
    res.send(`Get contact ${req.params.id}`);
};

module.exports = {getContacts, createContact, updateContact, deleteContact, getContact};