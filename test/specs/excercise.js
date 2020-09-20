const moment = require("moment")
const currentHour = moment().format('LT')
const futureDate = moment().add(7, "days").calendar();
const hour = currentHour.split(" ")[0];
const AMPM = currentHour.split(" ")[1];

describe('Parking Cost Calculator', () => {
    it('Browse Parking Cost', () => {
        browser.url('http://www.shino.de/parkcalc/')
        browser.maximizeWindow()
        browser.pause(2000)
    })

    it('Choose a Parking Lot', () => {
        const parkingLotButtonList = $$('#ParkingLot')
        parkingLotButtonList.forEach(element => {
            element.click()
            element.click()
            browser.pause(1000)       
        });
        browser.pause(1000)
    })

    it('Entry Date and Time', () => {
        const currentDate = moment().format('l')
        const entryDate = $('/html/body/form/table/tbody/tr[2]/td[2]/a')
        entryDate.click()
        browser.pause(2000)
        
        const StartDateScript = "javascript:document.getElementById('StartingDate').value='" + currentDate + "';;window.close();"
        browser.execute(StartDateScript)
        browser.pause(2000)
        browser.switchWindow('Pick a Date')
        browser.pause(1000)
        browser.closeWindow()
        browser.pause(1000)
        browser.switchWindow('Parking Cost Calculator')
        browser.pause(1000) 

        const StartingTimeText = $('#StartingTime')
        StartingTimeText.click()
        StartingTimeText.clearValue()
        browser.pause(2000)
        StartingTimeText.setValue(hour)
        browser.pause(2000)
        
        if (AMPM == 'AM') {
            $('/html/body/form/table/tbody/tr[2]/td[2]/input[3]').click()
            browser.pause(3000)
        } else {
            $('/html/body/form/table/tbody/tr[2]/td[2]/input[4]').click()
            browser.pause(3000)
        }
   
    })

    it('Leaving date and time', () => {
        const leavingDate = $('/html/body/form/table/tbody/tr[3]/td[2]/a')
        leavingDate.click()
        browser.pause(1000)

        const leavingDateScript = "javascript:document.getElementById('LeavingDate').value='" + futureDate + "';;window.close();"
        browser.execute(leavingDateScript)
        browser.pause(3000)
        browser.switchWindow('Pick a Date')
        browser.pause(1000)
        browser.closeWindow()
        browser.switchWindow('Parking Cost Calculator')
        browser.pause(1000)

        const leavingTimeText = $('#LeavingTime') 
        leavingTimeText.click()
        leavingTimeText.clearValue()
        browser.pause(2000)
        leavingTimeText.setValue(hour)
        browser.pause(1000)

        if (AMPM == 'AM') {
            $('/html/body/form/table/tbody/tr[2]/td[2]/input[3]').click()
            browser.pause(3000)
        } else {
            $('/html/body/form/table/tbody/tr[2]/td[2]/input[4]').click()
            browser.pause(3000)
        }

    })
})
