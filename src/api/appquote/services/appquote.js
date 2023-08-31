'use strict';

/**
 * appquote service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appquote.appquote');
