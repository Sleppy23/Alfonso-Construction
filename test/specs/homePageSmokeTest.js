
describe('a flores construction website smoke test', () => {
    it('should load the home page', async () => {
      await browser.url('https://www.afloresconstruction.com')
      let mainLogo = $('.u_1040477562.dmRespCol.small-12.large-3.medium-3.has-one-widget-only')
      await expect(mainLogo).toBeExisting()
    })
})


