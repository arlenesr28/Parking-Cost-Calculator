const Page = require('./page');

class parkingLot extends Page {
    clickParkingLotDropdown() {
        const parkingLotListButton = $('#ParkingLot')
        return parkingLotListButton
    }

    valetParkingOption() {
        const valetParking = $('//*[@id="ParkingLot"]/option[1]')
        return valetParking
    }

    shortTermOption() {
        const shortTerm = $('//*[@id="ParkingLot"]/option[2]')
        return shortTerm
    }

    economyOption () {
        const economy = $('//*[@id="ParkingLot"]/option[3]')
        return economy
    }

    longTermGarageOption () {
        const longTermGarage = $('//*[@id="ParkingLot"]/option[4]')
        return longTermGarage
    }

    longTermSurfaceOption () {
        const longTermSurface = $('//*[@id="ParkingLot"]/option[5]')
        return longTermSurface
    }
}

module.exports = new parkingLot;