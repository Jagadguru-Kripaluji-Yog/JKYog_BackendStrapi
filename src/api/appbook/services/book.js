'use strict';

/**
 * appbook service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appbook.appbook');
