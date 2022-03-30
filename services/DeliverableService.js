/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Deliverable } = require('../models/Deliverable');

/**
* Creates the data
*
* deliverable Deliverable data to be created
* returns deliverable
* */
const createdeliverable = ({ deliverable }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Deliverable(deliverable).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* deliverableId String the Id parameter
* no response value expected for this operation
* */
const deletedeliverable = ({ deliverableId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Deliverable.findOneAndDelete({ _id:deliverableId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlldeliverable = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Deliverable.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* deliverableId String the Id parameter
* returns deliverable
* */
const getdeliverable = ({ deliverableId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Deliverable.findById(deliverableId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* deliverableId String the Id parameter
* deliverable Deliverable data to be updated (optional)
* returns deliverable
* */
const updatedeliverable = ({ deliverableId, deliverable }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Deliverable.findOneAndUpdate({ _id:deliverableId },deliverable).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createdeliverable,
  deletedeliverable,
  getAlldeliverable,
  getdeliverable,
  updatedeliverable,
};
