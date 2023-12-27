"use strict";

/**
 * event service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::event.event", ({ strapi }) => ({
  async checkDiscount(eventId, promoCode) {
    if (!eventId) {
      return context.badRequest("EventIdIsRequired");
    }

    if (!promoCode) {
      return context.badRequest("PromoCodeIsRequired");
    }

    const event = await strapi.entityService.findOne(
      "api::event.event",
      eventId,
      {
        fields: ["id"],
        populate: {
          promocodes: {
            fields: ["type", "discount_amount"],
            filters: {
              code: {
                $eq: promoCode,
              },
            },
          },
        },
      }
    );

    if (!event?.promocodes?.length) {
      return context.badRequest("InvalidPromoCode");
    }

    const [{ type, discount_amount }] = event.promocodes;

    return {
      discountType: type,
      discountAmount: discount_amount,
    };
  },
}));
