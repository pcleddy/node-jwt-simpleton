class JwtToken {
  constructor(params) {
    this.secret = params['secret'];
  }

  set_payload(params) {
    this.payload = params['payload'];
  }
}

module.exports.JwtToken =   JwtToken
