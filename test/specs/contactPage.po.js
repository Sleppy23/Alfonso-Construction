class contactPage {
    get contactPageSelectors() {
      const selectors = {
        contactUsTab: () => $('.unifiednav__item.dmUDNavigationItem_010101502206.currentPage.dmNavItemSelected'),
        contactUsHeader: () => $('.u_1450977857.dmform.default.native-inputs.active')
      }
      return selectors
    }
    async verifyContactUsHeader() {
        await this.contactPageSelectors.contactUsTab().click()
        await expect(this.contactPageSelectors.contactUsHeader().toBeExisting())
    }
  
  }
  module.exports = new contactPage()