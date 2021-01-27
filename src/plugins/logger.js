module.exports = {
  requestDidStart({request}) {
    console.log(`[${new Date().toISOString()}] ${request.operationName}`)
  }
}