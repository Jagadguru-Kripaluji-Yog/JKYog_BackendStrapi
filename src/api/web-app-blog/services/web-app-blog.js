'use strict';

/**
 * web-app-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-app-blog.web-app-blog');
