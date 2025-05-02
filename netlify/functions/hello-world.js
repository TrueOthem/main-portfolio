// A simple Netlify function to test if functions are working
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World from Netlify Functions!",
      timestamp: new Date().toISOString()
    })
  };
};
