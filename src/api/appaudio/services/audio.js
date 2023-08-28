'use strict';

/**
 * appaudio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appaudio.appaudio');
