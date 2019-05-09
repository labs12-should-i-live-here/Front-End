class StripeAuth {
  constructor() {
    this.authenthicated = false;
  }

  stripelogin(cb) {
    this.authenticated = true;
    cb();
  }

  stripelogout(cb) {
    this.authenthicated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenthicated;
  }
}

export default new StripeAuth();
