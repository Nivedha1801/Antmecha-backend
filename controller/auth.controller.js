const request = require("request");
const axios = require("axios");


module.exports.authenticate = (req,res) => {
  console.log("Inside authentication")
  axios({
    method: "GET",
    url: 'https://app.clickup.com/api?client_id=TLHE3M8430DS6J0T9O8DC9PSK1Z9KPPP&redirect_uri=http://localhost:4200',
    headers: {
      Accept: "application/json",
      Authorization: '55394185_b48c631f440e35ac16d84eb4058e81d33224e282'
    },
  }).then((response) => {
    console.log(response)
  }).catch((err) => {
    // console.log(err)
  })

  res.send({
    status: "Success"
  })
}

