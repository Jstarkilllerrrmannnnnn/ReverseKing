//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "samkelvin1050@gmail.com";
global.location = "Accra, Ghana";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/Reverseking1/ReverseKing";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vao11A529758tTEQZo1e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/QXbR0M0/IMG-2996.jpg";
global.devs = "233257514504";
global.sudo = process.env.SUDO || "233257514504,2349054039891";
global.owner = process.env.OWNER_NUMBER || "233257514504,2349054039891";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/p3Mb4qL.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "233257514504";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://reverseking-paircode.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9TK09aRUpsM2VoRjltcTZuQU5HaTltOUdSTkMvdHhSODM2QStBZXdXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2JjeXBpbnJnOCsyTXlJVTVhcXZYTnpzeFBFdldsbC9ESzdaK2Y2T01FZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRjFyRDZSdGgvVTdNc1FiNFAvSXo4N3d2a2pyN1hHdWdUb2ZoWlBXUWtVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRDgrdE1hdlRKZjJ3ZDhNNWFPNTJ2ZW1pM0NmVlhzcHRsMzFUWTBUSXh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCUlVlazlxaWYxY3hvTnhjb3RjSVJ1ZUlDNlBVTS9RZFUrcnoybm84Mmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IithMStGRUNSMzl4MGxPTGtNYTlHYjVKZEM5cFN0Yko5NVkrK0NaMURTUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU8zU0kyZnpvQllVcFI4aVcxVjl5djlpbitnZGJ3S1hjV3NxZFB3cEZuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVVzRTFjR3RRYTNzM1VhSW5BQ2N2Rkd3NlkydFVTOHZXUW5pZnlLc0h5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTV0JwUEJObkdmUkhjTngwN3pNMHJteWtJS1paTHlJR0NVWEtmSEVheW1yTDVDY1pFblhPYThEd2lCMEdCN3JVdmpzNE14eHZETW9XNEE0WEhCT2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJUUEtVVEtJd0xrb1hINVJ3SWhqVFNieHFZRklCUzlib2orWENjS0ZTWlJZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXcHBvN01jelN3Q3RPOEpRY0IzQUpnIiwicGhvbmVJZCI6IjQwNGY4NmJkLWUwZDEtNDhhOS05OTA1LTU3YjQyMzRiN2QyMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFeVM5KzZqcWh2ZU42cmV4OEJVeUMvMDNVTFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0pxZVV6RE1CRHpUalMwYklTMk5MWG9XTFdrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhLVEpEVldaIiwibWUiOnsiaWQiOiIyMzQ5MDQ2NDM0OTI4OjI0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJoYWQgUGVyc29uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJRHoxOXdGRVAraGpMa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJBQ3JGZUxYa0xsazNGcThEb01MaTBKOFJ1OHo2U0RBd3o2eFZMWDUyK3h3PSIsImFjY291bnRTaWduYXR1cmUiOiJnVDFRRDVTMDRZVUJwTzU1QnJLeHlFbnhlelFBeTd2c3ZLMVFzNCtGMHlZVEtwUjYyWFJuT3RzT0hxSnRNNFFualYydUx4by9PSXpUQ0NCUkV4aU1Cdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ3VLWjVScDh0aE1yQmwzOXdlMGZCRUNsaDNxOUlGL0V6bWRJQzFUenNDamFaYkFZR0lHSEF6QUpFTFFpTmNSaFJlV2pSR0lyUDVqZTZRUE1ZMmUyZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQ2NDM0OTI4OjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFBcXhYaTE1QzVaTnhhdkE2REM0dENmRWJ2TStrZ3dNTStzVlMxK2R2c2MifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAzNTEzNzN9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`REVERSEKING™`",
  author: process.env.PACK_AUTHER || "REVERSEKING",
  packname: process.env.PACK_NAME || "REVERSEKING",
  botname: process.env.BOT_NAME || "ReverseKing",
  ownername: process.env.OWNER_NAME || "REVERSEKING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R E V E R S E K I N G").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
