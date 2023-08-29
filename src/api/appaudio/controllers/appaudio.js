'use strict';

/**
 * appaudio controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::appaudio.appaudio');
