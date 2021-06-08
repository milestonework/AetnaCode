describe("Myrapname.com", () => {

    beforeAll(async () => {
        // Load blog page 
        await page.goto("https://www.myrapname.com");
    })

    it("Validate that you can input data into the fields", async () => {

        var firstNameSetTo = "Aetna-CVS";

        await page.fill("input[name=firstname]", firstNameSetTo);

        const firstnameValue = await page.$eval("input[name=firstname]", el => el.value);

        //Checking if the value in the Input Field is equal to the string entered  
        await expect(firstnameValue).toBe(firstNameSetTo);

        console.log(firstnameValue);

    })


    /** it("Design a negative scenario that involves the input fields", async () => {

        var firstNameSetTo = "Checking if the First Name field can take more than 24 characters";

        await page.fill("input[name=firstname]", firstNameSetTo);

        const firstnameValue = await page.$eval("input[name=firstname]", el => el.value);

        //expecting to fail since the input string is longer than 24 charatcters
        await expect(firstnameValue).toBe(firstNameSetTo);
    })*/

})

