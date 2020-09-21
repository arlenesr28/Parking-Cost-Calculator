const Page = require('./page');

class entryLeavingDate extends Page {
    entryDate (entryDate, currentDate) {
        entryDate.click()
        browser.pause(1000)

        const StartDateScript = "javascript:document.getElementById('StartingDate').value='" + currentDate + "';;window.close();"
        browser.execute(StartDateScript)
        browser.pause(2000)
        browser.switchWindow('Pick a Date')
        browser.pause(1000)
        browser.closeWindow()
        browser.switchWindow('Parking Cost Calculator')
        browser.pause(1000)
    }

    startingTime (startingTimeText, hour) {
        startingTimeText.click()
        startingTimeText.clearValue()
        browser.pause(2000)
        startingTimeText.setValue(hour)
        browser.pause(2000)
    }

    leavingDate (leavingDate, futureDate) {
        leavingDate.click()
        browser.pause(1000)

        const leavingDateScript = "javascript:document.getElementById('LeavingDate').value='" + futureDate + "';;window.close();"
        browser.execute(leavingDateScript)
        browser.pause(2000)
        browser.switchWindow('Pick a Date')
        browser.pause(1000)
        browser.closeWindow()
        browser.switchWindow('Parking Cost Calculator')
        browser.pause(1000)
    }

    leavingTime (leavingTimeText, hour) {
        leavingTimeText.click()
        leavingTimeText.clearValue()
        browser.pause(2000)
        leavingTimeText.setValue(hour)
        browser.pause(1000)
    }
}

module.exports = new entryLeavingDate;