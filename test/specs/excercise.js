const moment = require("moment");
const currentDate = moment().format('l');
const currentHour = moment().format('LT');
const futureDate = moment().add(7, "days").calendar();
const hour = currentHour.split(" ")[0];
const AM_PM = currentHour.split(" ")[1];

const parkingCostPage = require('../calcobjects/parking.page')
const parkinglotList = require('../calcobjects/parkingLotList.page')
const chooseEntryDate = require('../calcobjects/entryLeavingDate.page')
const chooseStartingTime = require('../calcobjects/entryLeavingDate.page')
const chooseLeavingDate = require('../calcobjects/entryLeavingDate.page')
const chooseLeavingTime = require('../calcobjects/entryLeavingDate.page')

const choose_ampm = require('../calcobjects/ampm');
const AmPm = new choose_ampm;

describe('Parking Cost Calculator', () => {
    it('Browse Parking Cost', () => {
        parkingCostPage.openPage()
    })

    it('Choose a Parking Lot', () => {
        let parkingLotButtonList = $$('#ParkingLot')
        parkingLotButtonList.forEach(element => {
            element.click()
            const list = $('//*[@id="ParkingLot"]/option[3]')
            browser.pause(1000)
            list.click()
            browser.pause(2000)
        });
        browser.pause(5000)
    })

    it('Entry Date and Time', () => {
        const entryDate = $('/html/body/form/table/tbody/tr[2]/td[2]/a')
        chooseEntryDate.entryDate(entryDate,currentDate)
        const startingTimeText = $('#StartingTime')
        chooseStartingTime.startingTime(startingTimeText, hour)
        AmPm.choose_ampm_entry(AM_PM);  
    })

    it('Leaving Date and Time', () => {
        const leavingDate = $('/html/body/form/table/tbody/tr[3]/td[2]/a')
        chooseLeavingDate.leavingDate(leavingDate, futureDate)
        const leavingTimeText = $('#LeavingTime') 
        chooseLeavingTime.leavingTime(leavingTimeText, hour)
        AmPm.choose_ampm_leaving(AM_PM);
    })

    it('Calculate Button', () => {
        const calculateButton = $('/html/body/form/input[2]')
        browser.pause(1000)
        calculateButton.click()
        browser.pause(5000)
    })
})
