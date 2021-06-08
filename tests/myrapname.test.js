describe("Myrapname.com", () => {

    beforeAll(async () => {
        await page.goto("https://www.myrapname.com");
    })

    afterAll(async () => {
       await page.close();
    })

    it("Validate that the input fields exist", async () => {

        const inputNameField = await page.waitForSelector("input[name=firstname]");
        await expect(inputNameField).not.toBeNull();
        console.log("inputNameField found");

        const inputInitialField = await page.waitForSelector("input[name=lastinitial]");
        await expect(inputInitialField).not.toBeNull();
        console.log("inputInitialField found");
    })

    it("Validate that you can input data into the fields", async () => {

        // setting up string variables
        var firstNameSetTo = "Aetna-CVS";
        var lastInitialSetTo = "R";

        // Fill text fields with firstname and initial 
        await page.waitForSelector('input[name=firstname]');
        await page.fill("input[name=firstname]", firstNameSetTo);

        await page.waitForSelector('input[name=lastinitial]');
        await page.fill("input[name=lastinitial]", lastInitialSetTo);

        // extract the actual stored values
        const firstnameValue = await page.$eval("input[name=firstname]", el => el.value);
        console.log("firstnameValue:", firstnameValue);

        const lastInitialValue = await page.$eval("input[name=lastinitial]", el => el.value);
        console.log("lastInitialValue:", lastInitialValue);

        //Checking if the value in the Input Field is equal to the string entered
        await expect(firstnameValue).toBe(firstNameSetTo);
        await expect(lastInitialValue).toBe(lastInitialSetTo); 
    })

     it("Design a negative scenario that involves the input fields", async () => {

        var inputString = "Checking if the First Name field can take more than 24 characters";

         await page.waitForSelector('input[name=firstname]');
         await page.fill("input[name=firstname]", inputString);

        //Getting the actual value stored in the Text field 
        const actualStoredValue = await page.$eval("input[name=firstname]", el => el.value);

        //expecting to fail since the input string is longer than 24 charatcters
         await expect(actualStoredValue).toBe(inputString);
     })

    it("Submit a name for a male with a nickname and validate that a new name has been prepended to the list", async () => {

        //Get the count of the Tweet images before clicking the Male button 
        const initialTweetImgCnt = await page.$$eval("img[src='https://www.myrapname.com/images/tweet-button.jpg']", elements => elements.length)
        console.log("initialTweetImgCnt:",initialTweetImgCnt);

        //fill the name
        var maleFirstName = "Peter";
        await page.waitForSelector('input[name=firstname]'); 
        await page.fill("input[name=firstname]", maleFirstName);

        //click the Male button
        await page.waitForSelector('input[name=Male]');
        await page.click("input[name=Male]"); 

        //Get the count of the Tweet images after clicking the Male button  
        const newTweetImgCnt = await page.$$eval("img[src='https://www.myrapname.com/images/tweet-button.jpg']", elements => elements.length)
        console.log("newTweetImgCnt:", newTweetImgCnt);

        //if a new row was successfully added, newTweetImgCnt should always be greater than initialTweetImgCnt 
        await expect(newTweetImgCnt).toBeGreaterThan(initialTweetImgCnt);
    })

    it("Submit twice for a female with a last initial and validate that a new name has been prepended to the list", async () => {

        //fill the name & initial
        var femaleFirstName = "Mary";
        await page.waitForSelector('input[name=firstname]');
        await page.fill("input[name=firstname]", femaleFirstName);

        var femaleInitial = "M";
        await page.waitForSelector('input[name=lastinitial]');
        await page.fill("input[name=lastinitial]", femaleInitial);

        //click the Female button once
        await page.waitForSelector('input[name=Female]');
        await page.click("input[name=Female]");

        //get the hidden listnumber variable
        const listNumberAsString1 = await page.$eval("input[name=nhc]", el => el.value);
        console.log("listNumberAsString1:", listNumberAsString1);
        listNumber1 = parseInt(listNumberAsString1)

        //click the Female button twice
        await page.waitForSelector('input[name=Female]');
        await page.click("input[name=Female]");

        //get the hidden listnumber variable 
        const listNumberAsString2 = await page.$eval("input[name=nhc]", el => el.value);
        console.log("listNumberAsString2:", listNumberAsString2);
        listNumber2 = parseInt(listNumberAsString2)

        await expect(listNumber2).toBeGreaterThan(listNumber1);
    })
})

