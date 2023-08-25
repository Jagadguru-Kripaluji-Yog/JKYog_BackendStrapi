'use strict';

/**
 * quota service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quota.quota');
