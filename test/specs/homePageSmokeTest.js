const contactPage = require('../specs/contactPage.po')
const homePage = require('../specs/homePage.po')


describe('a flores construction website smoke test', () => {
  
    it('should load the home page', async () => {
      homePage.verifyHomePageLogo()
    })

    it('should verify contact header', async () => {
      contactPage.verifyContactUsHeader()
      await browser.pause(5000)
    })
  
})


