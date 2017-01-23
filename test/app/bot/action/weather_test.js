var appRoot = require('app-root-path')
var weatherjs = require(appRoot + '/app/bot/action/weather' )
var expect = require('chai').expect
var useIn = 'What is the weather in Orlando, FL?'
var useFor = 'Get the weather for Chicago, IL.'

describe('getCityState', function() {
  var getCityState = weatherjs.getCityState
  it('should get the Slack message using the word in', function() {
    //expect(getCityState(useIn)).to.equal('Orlando, FL')
  })
})