describe("Myrapname.com", () => {

    it("should exist", async () => {
        await page.goto("https://www.myrapname.com");
    })
})

describe("Myrapname.com", () => {

    it("input fields should exist", async () => {

        await page.goto("https://www.myrapname.com");

        const inputNameField = page.waitForSelector('text=firstname', { visible: true, timeout: 10000 })
        expect(inputNameField).not.toBeNull();

        //const inputInitialField = page.waitForSelector('text=lastinitial')
        //expect(inputInitialField).not.toBeNull();

        //const checkBoxField = await page.waitForSelector('checkbox=shorten')
        //expect(checkBoxField).not.toBeNull();

    })
})

describe("Myrapname.com", () => {

    it("Validate that you can input data into the fields", async () => {
/**
        await page.goto("https://www.myrapname.com");

        const inSelector = 'input[name="fistname"]';
        page.waitForSelector(inSelector, { visible: true, timeout: 30000 });
        page.fill(inSelector, "Peter");

        const inputTextField = page.$("text='firstname'");
           console.log(`✅ ${inputTextField}`);
        expect(inputTextField).not.toBeNull()*/


         /** page.click('input[name="fistname"]');
         page.type("input[name=fullname]", "Peter");*/


        const inSelector = 'input[name="fistname"]';
        page.waitForSelector(inSelector, { visible: true, timeout: 30000 });
        page.fill(inSelector, "Peter");

        const inputTextField = page.$("text='firstname'");
        console.log(`✅ ${inputTextField}`);
        expect(inputTextField).toBeNull()

    })
    
})