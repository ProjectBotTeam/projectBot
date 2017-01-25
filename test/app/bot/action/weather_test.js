var appRoot = require('app-root-path')
var weatherjs = require(appRoot + '/app/bot/action/weather')
var expect = require('chai').expect
var message = 'What is the weather in Orlando, FL?'

describe('getCityState', function () {
  var getCityState = weatherjs.getCityState
  var cityState = ['Orlando', ' FL']

  it('should get the city, state from the Slack message', function () {
    expect(getCityState(message)).to.deep.equal(cityState)
  })
})