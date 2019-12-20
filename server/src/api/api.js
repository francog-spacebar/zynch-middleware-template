const { log } = require('../config')

const api = {}

api.allowOwnerSwapBattery = (req, res, next) => {
  res.json({
    status: 200,
    type: 'allowOwnerSwapBattery',
    message: 'request received'
  })
}

api.loginInternalUser = (req, res, next) => {
  log.debug('requested /api/loginInternalUser')
  res.json({
    status: 200,
    type: 'loginInternalUser',
    message: 'request received'
  })
}

api.notifyUnusual = (req, res, next) => {
  res.json({
    status: 200,
    type: 'notifyUnusual',
    message: 'request received'
  })
}

api.createOwner = (req, res, next) => {
  res.json({
    status: 200,
    type: 'createOwner',
    message: 'request received'
  })
}

api.updateOwnerInfo = (req, res, next) => {
  res.json({
    status: 200,
    type: 'updateOwnerInfo',
    message: 'request received'
  })
}

api.getOwnerInfo = (req, res, next) => {
  res.json({
    status: 200,
    type: 'getOwnerInfo',
    message: 'request received'
  })
}

api.getSwapRecord = (req, res, next) => {
  res.json({
    status: 200,
    type: 'getOwnerInfo',
    message: 'request received'
  })
}

api.getCabinetStatus = (req, res, next) => {
  res.json({
    status: 200,
    type: 'getOwnerInfo',
    message: 'request received'
  })
}

api.getOwnerRecord = (req, res, next) => {
  res.json({
    status: 200,
    type: 'getOwnerInfo',
    message: 'request received'
  })
}

api.getBatteryStatus = (req, res, next) => {
  res.json({
    status: 200,
    type: 'getBaterryStatus',
    message: 'request received'
  })
}

module.exports = api
