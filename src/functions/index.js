module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: {
      message: "Go Serverless v3.0! Your function executed successfully!",
      input: event,
    },
  };
};
