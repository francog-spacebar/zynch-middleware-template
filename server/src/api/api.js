const { log } = require('../config')

const api = {}

api.allowOwnerSwapBattery = (req, res, next) => {
  if (req.query.ownerId) {
    res.json({
      status: 'Ok',
      type: 'allowOwnerSwapBattery',
      permissionResponse: ['OK', 'decline'],
      message: 'Not implemented'
    })
  } else {
    res.json({
      status: 'Error',
      type: 'allowOwnerSwapBattery',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

api.loginInternalUser = (req, res, next) => {
  log.debug('requested /api/loginInternalUser')
  if (req.query.ownerId) {
    res.json({
      status: 'Ok',
      type: 'loginInternalUser',
      id_token: {
        sub: 'ownerId',
        name: 'ownerName',
        iusa_user_type: [0, 1, 2, 3, 4]
      },
      message: 'Not implemented'
    })
  } else {
    res.json({
      status: 'Error',
      type: 'loginInternalUser',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

api.notifyUnusual = (req, res, next) => {
  const query = req.query
  if (query.errorType && query.type && query.errorCode && query.errorMessage) {
    res.json({
      status: 'Ok',
      type: 'notifyUnusual',
      message: 'Not implemented'
    })
  } else {
    res.json({
      status: 'Error',
      type: 'notifyUnusual',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

api.createOwner = (req, res, next) => {
  const query = req.query
  if (query.ownerId && query.status) {
    res.json({
      status: 'Ok',
      type: 'createOwner',
      result: ['success', 'error'],
      message: 'Not implemented'
    })
  } else {
    res.json({
      status: 'Error',
      type: 'createOwner',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

api.updateOwnerInfo = (req, res, next) => {
  const query = req.query
  if (query.ownerId && query.status) {
    res.json({
      status: 'Ok',
      type: 'updateOwner',
      result: ['success', 'error'],
      message: 'Not implemented'
    })
  } else {
    res.json({
      status: 'Error',
      type: 'updateOwner',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

api.getOwnerInfo = (req, res, next) => {
  const query = req.query
  if (query.ownerId) {
    res.json({
      type: 'getOwnerInfo',
      status: ['active', 'disable'],
      message: 'Not implemented',
      batteryIds: ['Id0', 'Id1', 'Id2', 'Id3']
    })
  } else {
    res.json({
      status: 'Error',
      type: 'getOwnerInfo',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

api.getSwapRecord = (req, res, next) => {
  const query = req.query
  if (query.ownerId && query.start && query.end) {
    res.json({
      status: 'Ok',
      type: 'getSwapRecord',
      swapRecord: [{ time: '00:00:00', batteryId: '0123456789' }],
      message: 'Not implemented'
    })
  } else {
    res.json({
      status: 'Error',
      type: 'getSwapRecord',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

api.getCabinetStatus = (req, res, next) => {
  const query = req.query
  if (query.ownerId) {
    res.json({
      status: ['available', 'unavailable', 'offline'],
      power: ['UPS', 'AC'],
      lat: -0.0,
      lng: -0.0,
      type: 'getCabinetStatus',
      result: ['success', 'error'],
      message: 'Not implemented'
    })
  } else {
    res.json({
      status: 'Error',
      type: 'getCabinetStatus',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

api.getOwnerRecord = (req, res, next) => {
  const query = req.query
  if (query.ownerId) {
    res.json({
      status: 'Ok',
      type: 'getOwnerRecord',
      record: [
        {
          time: '1/1/2020',
          batteryId: '0123456789',
          from: 'prevOwnerId',
          to: 'nextOwnerId',
          action: ['get', 'release']
        }
      ],
      message: 'Not implemented'
    })
  } else {
    res.json({
      status: 'Error',
      type: 'getOwnerRecord',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

api.getBatteryStatus = (req, res, next) => {
  const query = req.query
  console.log(req)
  if (query.batteryId) {
    res.json({
      status: 'Ok',
      type: 'getBatteryStatus',
      batterySN: 'A0B1C2D3E4F5',
      state: ['idle', 'charging', 'discharging'],
      chargingRemainingMinutes: 9999,
      IOCurrent: 1,
      health: 0.999,
      message: 'Not implemented'
    })
  } else {
    res.json({
      status: 'Error',
      type: 'getBatteyStatus',
      error: 'Error code',
      message: 'An error ocurred'
    })
  }
}

module.exports = api
