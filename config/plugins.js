module.exports = ({ env }) => ({
  // ...

meilisearch: {
    config: {
      // Your meili host
      host: "https://meilisearch-production-3630.up.railway.app/",
      // Your master key or private key
      apiKey: "ImVbhUOWHLgJrrbiKEpJn/KD6HOqgkCf%",
    }
  },
 "rest-cache": {
    config: {
        provider: {
         name: "memory",
            options: {
              max: 32767,
              maxAge: 3600,
            },
          },
          strategy: {
            contentTypes: [
              "api::appversion.appversion",
              "api::apptopic.apptopic",
              "api::appquote.appquote",
              "api::appevent.appevent",
              "api::appcourse.appcourse",
              "api::appcollection.appcollection",
              "api::appannouncement.appannouncement",
              "api::appvideo.appvideo",
              "api::apparticle.apparticle",
              "api::appaudio.appaudio",
              "api::appbook.appbook",
            ],
          },
        },
      },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: env("CDN_URL"),
        rootPath: env("CDN_ROOT_PATH"),
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          params: {
            ACL: env("AWS_ACL", "public-read"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "import-export-entries": {
    enabled: true,
  },
});
