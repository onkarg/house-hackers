const bodyParser = require("body-parser");
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const config = require("../config");
const { domain, clientID, clientSecret } = config;
const port = process.env.PORT || 3000;

require("dotenv").config();

const ctrl = require("./controller/controller");

const app = express();

////DATABASE////

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);

  db.init_tables.create_users_seed().then(response => {
    console.log("User table init");
    db.init_tables.create_properties_seed().then(response => {
      console.log("Properties table init");
    });
  });
});

app.use(
  session({
    secret: "anything",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: domain,
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "/login"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      //Find user in database
      db.getUserByAuth([profile.id], function(err, user) {
        user = user[0];

        // Checking if user does not exist, if so a new user is created
        if (!user) {
          console.log("CREATING USER");
          db.createUserByAuth([profile.displayName, profile.id], function(
            err,
            user
          ) {
            console.log("USER CREATED", userA);
            // after succesful creation user is sent to serialize
            return done(err, user[0]);
          });
        } else {
          //when we find the user, return it
          console.log("FOUND USER", user);
          return done(err, user);
        }
      });
    }
  )
);

passport.serializeUser(function(user, done) {
  console.log("serializing", user);
  done(null, {
    id: user.id,
    display: user.displayName,
    nickname: user.nickname,
    email: user.emails[0].value
  });
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use(bodyParser.json());

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureFlash: true
  })
);

app.get("/dashboard", (req, res, next) => {
  if (!req.user) {
    res.redirect("/login");
  } else {
    res.status(200).send(JSON.stringify(req.user, null, 10));
  }
});

app.get('/api/users', ctrl.getUsers)
app.get('/api/properties', ctrl.getProperties)
app.get('/api/user/:userId/propertiescount', ctrl.getPropertyCount)
app.get('/api/user/:userId/properties', ctrl.getUserProperties)
app.get('/api/properties', ctrl.getPropertyByQuery)
app.post('/api/users', ctrl.createUser)
app.post('/api/property', ctrl.createProperty)

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
