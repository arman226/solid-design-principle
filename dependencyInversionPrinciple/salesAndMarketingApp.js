class SalesAndMarketingApp {
  constructor(user) {
    this.user = user;
    this.outlookAPI = new MicrosoftOutlookAPI(user);
  }

  blastEmail(recipients, message) {
    this.outlookAPI.sendEmailToMultipleRecipients(recipients, message);
  }
}

class MicrosoftOutlookAPI {
  constructor(user) {
    this.user = user;
  }

  sendEmailToMultipleRecipients(recipients, message) {
    recipients.map((item) => {
      console.log({
        recipient: item,
        sender: this.user,
        message,
      });
    });
  }
}

class GoogleMailAPI {
  constructor() {}
  sendEmailToMultipleRecipients(user, recipients, message) {
    recipients.map((item) => {
      console.log({
        recipient: item,
        sender: user,
        message,
      });
    });
  }
}

const salesAndMarketingApp = new SalesAndMarketingApp("johnny");
salesAndMarketingApp.blastEmail(
  ["Andrew", "Jerome", "Michael"],
  "Good Morning To All Of You"
);
