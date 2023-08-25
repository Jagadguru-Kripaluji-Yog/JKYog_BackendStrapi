'use strict';

/**
 * quota controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::quota.quota');
