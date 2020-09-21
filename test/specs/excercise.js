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

    it('Choose a Parking Lot: Valet Parking', () => {
        parkinglotList.clickParkingLotDropdown()
        parkinglotList.valetParkingOption().click()
        browser.pause(2000)
        const entryDate = $('/html/body/form/table/tbody/tr[2]/td[2]/a')
        chooseEntryDate.entryDate(entryDate,currentDate)
        const startingTimeText = $('#StartingTime')
        chooseStartingTime.startingTime(startingTimeText, hour)
        AmPm.choose_ampm_entry(AM_PM);  
        const leavingDate = $('/html/body/form/table/tbody/tr[3]/td[2]/a')
        chooseLeavingDate.leavingDate(leavingDate, futureDate)
        const leavingTimeText = $('#LeavingTime') 
        chooseLeavingTime.leavingTime(leavingTimeText, hour)
        AmPm.choose_ampm_leaving(AM_PM);
        const calculateButton = $('/html/body/form/input[2]')
        calculateButton.click()
        browser.pause(3000)
    })

    it('Choose a Parking Lot: Short Term Parking', () => {
        parkinglotList.clickParkingLotDropdown()
        parkinglotList.shortTermOption().click()
        browser.pause(2000)
        const entryDate = $('/html/body/form/table/tbody/tr[2]/td[2]/a')
        chooseEntryDate.entryDate(entryDate,currentDate)
        const startingTimeText = $('#StartingTime')
        chooseStartingTime.startingTime(startingTimeText, hour)
        AmPm.choose_ampm_entry(AM_PM);  
        const leavingDate = $('/html/body/form/table/tbody/tr[3]/td[2]/a')
        chooseLeavingDate.leavingDate(leavingDate, futureDate)
        const leavingTimeText = $('#LeavingTime') 
        chooseLeavingTime.leavingTime(leavingTimeText, hour)
        AmPm.choose_ampm_leaving(AM_PM);
        const calculateButton = $('/html/body/form/input[2]')
        calculateButton.click()
        browser.pause(3000)
    })

    it('Choose a Parking Lot: Economy Parking', () => {
        parkinglotList.clickParkingLotDropdown()
        parkinglotList.economyOption().click()
        browser.pause(2000)
        const entryDate = $('/html/body/form/table/tbody/tr[2]/td[2]/a')
        chooseEntryDate.entryDate(entryDate,currentDate)
        const startingTimeText = $('#StartingTime')
        chooseStartingTime.startingTime(startingTimeText, hour)
        AmPm.choose_ampm_entry(AM_PM);  
        const leavingDate = $('/html/body/form/table/tbody/tr[3]/td[2]/a')
        chooseLeavingDate.leavingDate(leavingDate, futureDate)
        const leavingTimeText = $('#LeavingTime') 
        chooseLeavingTime.leavingTime(leavingTimeText, hour)
        AmPm.choose_ampm_leaving(AM_PM);
        const calculateButton = $('/html/body/form/input[2]')
        calculateButton.click()
        browser.pause(3000)
    })

    it('Choose a Parking Lot: Long Term Garage Parking', () => {
        parkinglotList.clickParkingLotDropdown()
        parkinglotList.longTermGarageOption().click()
        browser.pause(2000)
        const entryDate = $('/html/body/form/table/tbody/tr[2]/td[2]/a')
        chooseEntryDate.entryDate(entryDate,currentDate)
        const startingTimeText = $('#StartingTime')
        chooseStartingTime.startingTime(startingTimeText, hour)
        AmPm.choose_ampm_entry(AM_PM);  
        const leavingDate = $('/html/body/form/table/tbody/tr[3]/td[2]/a')
        chooseLeavingDate.leavingDate(leavingDate, futureDate)
        const leavingTimeText = $('#LeavingTime') 
        chooseLeavingTime.leavingTime(leavingTimeText, hour)
        AmPm.choose_ampm_leaving(AM_PM);
        const calculateButton = $('/html/body/form/input[2]')
        calculateButton.click()
        browser.pause(3000)
    })

    it('Choose a Parking Lot Long: Term Surface Parking', () => {
        parkinglotList.clickParkingLotDropdown()
        parkinglotList.longTermSurfaceOption().click()
        browser.pause(2000)
        const entryDate = $('/html/body/form/table/tbody/tr[2]/td[2]/a')
        chooseEntryDate.entryDate(entryDate,currentDate)
        const startingTimeText = $('#StartingTime')
        chooseStartingTime.startingTime(startingTimeText, hour)
        AmPm.choose_ampm_entry(AM_PM);  
        const leavingDate = $('/html/body/form/table/tbody/tr[3]/td[2]/a')
        chooseLeavingDate.leavingDate(leavingDate, futureDate)
        const leavingTimeText = $('#LeavingTime') 
        chooseLeavingTime.leavingTime(leavingTimeText, hour)
        AmPm.choose_ampm_leaving(AM_PM);
        const calculateButton = $('/html/body/form/input[2]')
        calculateButton.click()
        browser.pause(3000)
    })
})
