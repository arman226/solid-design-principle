class SalesAndMarketingApp {
  constructor(emailProcessor) {
    this.emailProcessor = emailProcessor;
  }

  blastEmail(recipients, message) {
    this.emailProcessor.sendEmailToMultipleRecipients(recipients, message);
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

class GmailProcessor {
  constructor(user) {
    this.user = user;
    this.gmailAPI = new GoogleMailAPI();
  }
  sendEmailToMultipleRecipients(recipients, message) {
    this.gmailAPI.sendEmailToMultipleRecipients(this.user, recipients, message);
  }
}

class MSOutlookProcessor {
  constructor(user) {
    this.user = user;
    this.outlookAPI = new MicrosoftOutlookAPI(user);
  }
  sendEmailToMultipleRecipients(recipients, message) {
    this.outlookAPI.sendEmailToMultipleRecipients(recipients, message);
  }
}

const salesAndMarketingApp = new SalesAndMarketingApp(
  new GmailProcessor("Johnny")
);
salesAndMarketingApp.blastEmail(
  ["Andrew", "Jerome", "Michael"],
  "Good Morning To All Of You"
);
