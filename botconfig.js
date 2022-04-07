module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://trakteer.id/bot-project/", //Support Server Link
  Token: process.env.Token || "OTAwMDY4NTM0MDExNDU3NjE2.YW78JA.E5D3aLwL23lYX2a2MeBZ13_Uv_4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "900068534011457616", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "FhL191GwceRkoOd8dkz13PXLQ7SzSuoj", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://example.com", //Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  //If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

   // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink/
  // The default one should work fine, altho if you have issue with it, you can create your own or use another public lavalink.
  Lavalink: {
    id: "Main",
    host: "node03.marshalxp.xyz",
    port: 443,
    pass: "marshal",
    secure: true,
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "1d8b7bc8eec74e7a88a4996126960031", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "d7820f76bf2648cc9d99c5b008662d09", //Spotify Client Secret
  },
};
