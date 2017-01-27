var appRoot = require('app-root-path')
var weatherjs = require(appRoot + '/app/bot/action/weather')
var expect = require('chai').expect
var message = 'What is the weather in Orlando, FL?'
var noPatternMessage = 'What is the weather in blahblah blah?'

describe('getCityState', function () {
  var getCityState = weatherjs.getCityState
  var cityState = ['Orlando', ' FL']
  var noCityState = ['none', 'none']

  it('should get the city, state from the Slack message', function () {
    expect(getCityState(message)).to.deep.equal(cityState)
  })

  it('should set the city and state to none', function () {
    expect(getCityState(noPatternMessage)).to.deep.equal(noCityState)
  })
})