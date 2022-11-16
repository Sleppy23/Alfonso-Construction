class homePage {
    get homePageSelectors() {
      const selectors = {
        homePageLogo: () => $('.u_1040477562.dmRespCol.small-12.large-3.medium-3.has-one-widget-only'),
      }
      return selectors
    }
    async verifyHomePageLogo() {
        await expect(this.homePageSelectors.homePageLogo().toBeExisting())
    }

  

  }
  module.exports = new homePage()