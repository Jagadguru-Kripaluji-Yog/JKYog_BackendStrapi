'use strict';

/**
 * appversion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appversion.appversion');
