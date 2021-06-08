
/** describe("Myrapname.com", () => {

   // Sample Test 1 : Open the page 
  it("should exist", async () => {
      await page.goto("https://www.myrapname.com");
   })
}) 

describe("Myrapname.com", () => {

    it("Validate that the input fields exist", async () => {

        await page.goto("https://www.myrapname.com");

        const inputNameField = await page.waitForSelector("input[name=firstname]");
        await expect(inputNameField).not.toBeNull();
        console.log("inputNameField found");

        const inputInitialField = await page.waitForSelector("input[name=lastinitial]");
        await expect(inputInitialField).not.toBeNull();
        console.log("inputInitialField found");
   })
}) */

describe("Myrapname.com", () => {

    it("Validate that you can input data into the fields", async () => {

        await page.goto("https://www.myrapname.com");

        var firstNameSetTo = "Aetna-CVS";

        await page.fill("input[name=firstname]", firstNameSetTo);

        const firstnameValue = await page.$eval("input[name=firstname]", el => el.value);            

        //Checking if the value in the Input Field is equal to the string entered 
        await expect(firstnameValue).toBe(firstNameSetTo);

        console.log(firstnameValue);
    })
})

describe("Myrapname.com", () => {

    it("Design a negative scenario that involves the input fields", async () => {

        var firstNameSetTo = "Checking if the First Name field can take more than 24 characters";

        await page.goto("https://www.myrapname.com");

        await page.fill("input[name=firstname]", firstNameSetTo);

        const firstnameValue = await page.$eval("input[name=firstname]", el => el.value);

        //expecting to fail since the input string is longer than 24 charatcters
        await expect(firstnameValue).toBe(firstNameSetTo);
    })
})

//describe("Myrapname.com", () => {

//    it("list test using hidden variable", async () => {


//        var firstNameSetTo = "CVSMyName";

//        await page.goto("https://www.myrapname.com");

//        //fill the name
//        await page.fill("input[name=firstname]", firstNameSetTo);

//        //get the value of name
//        const firstnameValue = await page.$eval("input[name=firstname]", el => el.value);

//        //click the male button
//        await page.click("input[name=Male]");

//        //get the hidden listnumber variable
//        const listNumber = await page.$eval("input[name=nhc]", el => el.value);

//        console.log(listNumber);


//        await page.fill("input[name=firstname]", "New Name");

//        //get the value of name
//        const firstnameValue1 = await page.$eval("input[name=firstname]", el => el.value);

//        //click the male button
//        await page.click("input[name=Male]");

//        //get the hidden listnumber variable
//        const listNumber1 = await page.$eval("input[name=nhc]", el => el.value);

//        console.log(listNumber1);

//     })
//})

/** describe("Myrapname.com", () => {

    it("list test using tweet image", async () => {


        var firstNameSetTo = "CVSMyName";

        await page.goto("https://www.myrapname.com");

        //fill the name
        await page.fill("input[name=firstname]", firstNameSetTo);

        //get the value of name
        const firstnameValue = await page.$eval("input[name=firstname]", el => el.value);

        //click the male button
        await page.click("input[name=Male]");

        //await page.waitForSelector("img");

        const allList = await page.$$("img", selected => {
            let data = []
            selected.forEach((item) => {
                data.push(item.src);
                console.log(item.src);
            });
            return data;
        });
        console.log(allList);


        await page.fill("input[name=firstname]", "New Name");

        //get the value of name
        const firstnameValue1 = await page.$eval("input[name=firstname]", el => el.value);

        //click the male button
        await page.click("input[name=Male]");

        const allList1 = await page.$$("img", selected => {
            let data = []
            selected.forEach((item) => {
                data.push(item.src);
                console.log(item.src);
            });
            return data;
        });
        console.log(allList1);


    })
})
*/

//describe("Myrapname.com", () => {

//    it("Validate that you can input data into the fields", async () => {

//        await page.goto("https://www.myrapname.com");
//        /** 
//         const inSelector = 'input[name="fistname"]';
//         page.waitForSelector(inSelector, { visible: true, timeout: 30000 });
//         page.fill(inSelector, "Peter");

//         const inputTextField = page.$("text='firstname'");
//         console.log(`✅ ${inputTextField}`);
//         expect(inputTextField).not.toBeNull()*/


//        page.click('input[name="fistname"]');
//        page.type("input[name=fullname]", "Peter");

//        const inputTextField = page.$("text='firstname'");
//        console.log(`✅ ${inputTextField}`);
//        expect(inputTextField).not.toBeNull()

//    })
//})

/**
describe("Myrapname.com", () => {

    it("Design a negative scenario that involves the input fields", async () => {

        await page.goto("https://www.myrapname.com");


    })
})

describe("Myrapname.com", () => {

    it("Submit a name for a male with a nickname and validate that a new name has been prepended to the list", async () => {

        await page.goto("https://www.myrapname.com");


    })
})
*/