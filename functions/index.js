const functions = require("firebase-functions");
const admin = require("firebase-admin");

exports.addAdminRole = functions.https.onCall((data, context) => {
  if (context.app === undefined) {
    throw new functions.https.HttpsError(
        "failed-precondition",
        "The function must be called from an App Check verified app.");
  }
  {
    return admin
        .auth()
        .getUserByEmail(data.email)
        .then((user) => {
          return admin.auth().setCustomUserClaims(user.uid, {
            admin: true,
          });
        })
        .then(() => {
          return {
            message: `Success! ${data.email} has been made an admin!!`,
          };
        })
        .catch((err) => {
          console.log(err);
        });
  }
});
