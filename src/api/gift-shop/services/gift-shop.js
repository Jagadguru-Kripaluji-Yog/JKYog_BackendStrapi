'use strict';

/**
 * gift-shop service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gift-shop.gift-shop');
