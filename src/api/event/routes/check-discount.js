module.exports = {
  routes: [
    {
      method: "GET",
      path: "/events/check-discount",
      handler: "event.checkDiscount",
      config: {
        auth: false,
      },
    },
  ],
};
