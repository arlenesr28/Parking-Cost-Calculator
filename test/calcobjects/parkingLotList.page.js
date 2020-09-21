const Page = require('./page');

class parkingLot extends Page {
    getList (parkingList) {
        parkingList.forEach(element => {
            element.click()
            element.click()
        });
    }
}

module.exports = new parkingLot;