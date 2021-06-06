describe("Myrapname.com", () => {

    beforeAll(async () => {
        // Load blog page /
        await page.goto("https://www.myrapname.com");
    })


 /**   test('title should be ..', async () => {
        // Get website title /
        const title = await page.title();

        // Compare title of current page /
        expect(title).toBe('My Rap Name - A generator to automatically make rapper names');
    })


    test('Validate that the input is empty', async () => {

        const inputTextField = await page.$("text='firstname'");
        expect(inputTextField).toBeNull();

        const checkBoxField = await page.$("text='shorten'");
        expect(checkBoxField).toBeNull();
    })

    it("Validate input fields should exist", async () => {
        const inputNameField = page.waitForSelector('text=firstname', { visible: true, timeout: 30000 })
        expect(inputNameField).not.toBeNull();

        const inputInitialField = page.waitForSelector('text=lastinitial')
        expect(inputInitialField).not.toBeNull();

    })
    */
    test('Validate that you can input data into the fields', async () => {

       // page.fill('input[name="fistname"]', "somepassword");

       /** try {
            await page.fill('input[name="fistname"]', "somepassword");
        } catch (e) {
            if (e instanceof playwright.errors.TimeoutError) {
                // Do something if this is a timeout.
            }
        } */

        const inSelector = 'input[name="fistname"]';
         page.waitForSelector(inSelector, { visible: true, timeout: 30000 });
        page.fill(inSelector, "Peter");

        const inputTextField = page.$("text='firstname'");
        expect(inputTextField).toBeNull();

    })




        //page.click('data-test-id=text') 
        //page.fill('#fistname', 'Peter'); 
        //const inputTextField = page.$("text='firstname'");

        //expect(inputTextField).toBe('P');

       
        // page.type('input[name="fistname"]', 'somepassword');
        //await page.click('text=Sign In');

        // const textContent = await page.$eval("#firstname", el => el.textContent)
        // expect(textContent).stringContaining("my text")

 
/**
    it("input fields should exist", async () => {
        // before 
        //jest.setTimeout(30000);
        jest.setTimeout(35 * 1000);
        //await page.waitForSelector("#firstname") 
        const inputNameField = page.waitForSelector('text=firstname', { visible: true, timeout: 30000 })
        expect(inputNameField).not.toBeNull();

        const inputInitialField = page.waitForSelector('text=lastinitial')
        expect(inputInitialField).not.toBeNull();

        // await page.close();
        //const textContent = await page.$eval("#firstname", el => el.textContent)   

        // after by using expect-playwright 
        //await expect(page).toHaveText("#foo", "my text") 
    })


    test('Validate that the input fields exist', async () => {

        const inputTextField = await page.$("text='firstname'");
        expect(inputTextField).not.toBeNull();

        const checkBoxField = await page.$("text='shorten'");
        expect(checkBoxField).not.toBeNull();
    })

    test('Design a negative scenario that involves the input fields', async () => {

    })

    test('Validate that you can input data into the fields', async () => {

        const text = await page.innerText('.selected');
        expect(text).toBe('value');

    })

    test('Submit a name for a male with a nickname and validate that a new name has been prepended to the list', async () => {

        // Click an element with text 'Sign Up' inside of a #free-month-promo.
        await page.click('#free-month-promo >> text=Sign Up');

        await page.click('dialog button.cancel');
        await page.click('dialog button.cancel');

        //page.click('data-test-id=submit')

    })


    test('Submit twice for a female with a last initial and validate that a new name has been prepended to the list', async () => {

    })  */
})

