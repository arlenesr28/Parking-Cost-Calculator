const moment = require("moment");
const currentDate = moment().format('l');
const currentHour = moment().format('LT');
const futureDate = moment().add(7, "days").calendar();
const hour = currentHour.split(" ")[0];
const AM_PM = currentHour.split(" ")[1];

const parkingCostPage = require('../calcobjects/parking.page')

const choose_ampm = require('../calcobjects/ampm');
const AmPm = new choose_ampm;

describe('Parking Cost Calculator', () => {
    it('Browse Parking Cost', () => {
        parkingCostPage.openPage()
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
        
        AmPm.choose_ampm_entry(AM_PM);  
    })

    it('Leaving Date and Time', () => {
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

        AmPm.choose_ampm_leaving(AM_PM);
    })

    it('Calculate Button', () => {
        const calculateButton = $('/html/body/form/input[2]')
        browser.pause(1000)
        calculateButton.click()
        browser.pause(5000)
    })
})
