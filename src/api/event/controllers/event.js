"use strict";

/**
 * event controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::event.event", ({ strapi }) => ({
  async checkDiscount(context) {
    const eventId = context.query.eventId;
    const promoCode = context.query.promoCode;

    return strapi.service("api::event.event").checkDiscount(eventId, promoCode);
  },
}));
