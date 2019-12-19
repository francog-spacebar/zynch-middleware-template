'use strict'
const crypto = require('crypto')
const moment = require('moment')
const config = require('../../config').config
const User = require('../user.model')
const log = require('../../config/services/logging')
const mail = require('../../common/services/email')

moment().format()

const apiSecret = config.env.apiSecret
const debugEmail = config.env.debugEmail

function errorAndDie (errorMsg, req = null) {
  const reqstring = JSON.stringify({ headers: req.headers, body: req.body })
  mail.send(
    {
      to: debugEmail,
      subject: 'CoinPayments IPN Error',
      content: `Error: ${errorMsg}<br /><br />Request:<br /><br />${reqstring}`
    },
    (error, sent) => {
      if (!error && sent) {
      } else {
      }
    }
  )
  log.error('IPN Error: ' + errorMsg)
}

/**
 * Activate an existing user
 * @function
 * @param {object} req
 * @param {callback} callback
 */
const activate = (req, callback) => {
  const bodyString = Buffer.from(req.rawBody, 'utf8')
  const hmac = crypto
    .createHmac('sha512', apiSecret)
    .update(bodyString)
    .digest('hex')
  if (req.headers.hmac !== hmac) {
    return callback(null, null)
  }

  const success = true
  if (success /** HACER LAS VERIFICACIONES NECESARIAS EN EL BACKEND **/) {
    User.findOneAndUpdate(
      { email: req.email },
      {
        $set: {
          active: true,
          expirationDate: 99999999999999999999999999,
          name: req.name
        },
        $push: {
          txIDArray: req.txId
        }
      },
      {
        new: true
      },
      (err, user) => {
        log.verbose('Updating database...')
        if (!err && user) {
          log.verbose('DB update success')
          return callback(null, user)
        } else {
          log.error('DB update error' + err)
          return callback(err)
        }
      }
    )
  } else {
    errorAndDie('Error while activating user', req)
  }
}

module.exports = {
  activate
}
