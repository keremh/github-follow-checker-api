const { generateOptions } = require('./utils');
const https = require('https');

const checkFollow = async function (req, res) {
    const user = req.params.user;
    const targetUser = req.params.target_user;
    const options = generateOptions('/users/' + user + '/' + 'following' + '/' + targetUser)

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })

}

const getFollowers = async function (req, res) {
    const username = req.params.username;
    const options = generateOptions('/users/' + username + '/' + 'followers')

    https.get(options, function (apiResponse) {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send(constants.error_message);
    })

}

module.exports = { checkFollow, getFollowers }