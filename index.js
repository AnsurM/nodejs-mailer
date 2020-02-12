const nodemailer = require("nodemailer");

const { mailtrapConfig } = require("./config");

let transport = nodemailer.createTransport(mailtrapConfig);

let messageBody = {
  subject: "Hey! Design Your Model S | Tesla",
  text: "Have the most fun you can in a car. Get your Tesla today!",
  html:
    "<h1>Hello! Welcome to Tesla Store!</h1> <br /> <p>Get your new tesla right now in a matter of minutes!</p>",
  attachments: [
    {
      // Use a URL as an attachment
      filename: "your-tesla.png",
      path:
        "https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048"
    }
  ]
};

const message = {
  from: "support@mysite.com", // Sender address
  to: "johndoe@gmail.com", // List of recipients

  //These properties (to, from, text/html) can be put into a separate JS Object and spread here for re-usability
  ...messageBody

  /*
  OR
  these properties can be added like this

  subject: "Design Your Model S | Tesla", // Subject line
  text: messageBody.text, // Plain text body
  html: messageBody.html // Plain html body
  attachments: [{ fileName: "", path: ""}] // any attachments such as docs or picture or any file
  */
};
transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
