/**
 * The DeliverableController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DeliverableService');
const createdeliverable = async (request, response) => {
  await Controller.handleRequest(request, response, service.createdeliverable);
};

const deletedeliverable = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletedeliverable);
};

const getAlldeliverable = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlldeliverable);
};

const getdeliverable = async (request, response) => {
  await Controller.handleRequest(request, response, service.getdeliverable);
};

const updatedeliverable = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatedeliverable);
};


module.exports = {
  createdeliverable,
  deletedeliverable,
  getAlldeliverable,
  getdeliverable,
  updatedeliverable,
};
