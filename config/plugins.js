module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: "AKIAXM5VESRF4ESTCJVD",
          secretAccessKey: "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",
          region: "us-east-1",
          params: {
            Bucket: "game-rent",
          },
        },
      },
    },
    // ...
  });
   