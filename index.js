const Server = require("@airswap/protocols").Server;

async function getdata() {
  const server = new Server("https://m-fkkrhubwc.now.sh");
  server
    .getMaxQuote("WETH", "DAI")
    .then((res) => {
      console.log("quote:", res);
    })
    .catch((err) => {
      console.log(err);
    });
}
getdata();
