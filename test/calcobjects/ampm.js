module.exports = class AMPM {

    choose_ampm_entry (am_pm) {
        if (am_pm == 'AM') {
            $('/html/body/form/table/tbody/tr[2]/td[2]/input[3]').click()
            browser.pause(2000)
        } else {
            $('/html/body/form/table/tbody/tr[2]/td[2]/input[4]').click()
            browser.pause(2000)
        }
        return am_pm
    }
    
    choose_ampm_leaving (am_pm){
        if (am_pm == 'AM') {
            $('/html/body/form/table/tbody/tr[3]/td[2]/input[3]').click()
        } else {
            $('/html/body/form/table/tbody/tr[3]/td[2]/input[4]').click()
        }
    }
}