const puppeteer = require('puppeteer');
const fs = require('fs');
const json2xls = require('json2xls');
const filename = 'myExcel.xlsx';



async function getStudents(){
    var test= []

    var array = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var applicationLink = "#student_search"
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ["--disable-dev-shm-usage", "--no-sandbox"],
    });

        const page = await browser.newPage();
        page.setDefaultNavigationTimeout(100000)

    // Navigation to required page --- //
    try {
        await page.goto('http://197.156.115.82/auth/login', {waitUntil: 'networkidle2', waitUntil: 'load'});
        await page.click(`a[href='${applicationLink}']`);
        await page.waitForSelector("#full_name");
        for (let i = 0; i < array.length; i++) {
            await page.type("#full_name", array[i],{ delay: 2 });
            await page.keyboard.press('Enter');
            //await page.waitForNavigation({waitUntil: 'networkidle2'})
            await page.waitForResponse('http://197.156.115.82/estudent/home/index')
            await page.waitFor(3000)
            try {
               // await page.waitForSelector('.nav.nav-pills.nav-stacked.bx2.table-striped, .selector2',{timeout:1000})
                // await page.waitForSelector(".nav.nav-pills.nav-stacked.bx2.table-striped")
                await page.evaluate(() => {
                    const lis = document.getElementsByTagName('li')
                    console.log(lis.length);        
                })
                let div_selector= ".nav.nav-pills.nav-stacked.bx2.table-striped"; 
                let list_length = await page.evaluate((sel) => {
                        let elements = Array.from(document.querySelectorAll(sel));
                        return elements.length;
                }, div_selector);
                for(let i=0; i< list_length; i++) {
                    var href = await page.evaluate((l, sel) => {
                        let elements= Array.from(document.querySelectorAll(sel))
                        let anchor  = elements[l]
                        if(anchor){
                            return anchor.innerText;
                        }else{
                            return 'empty';
                        }
                    }, i, div_selector);
                    test.push(href)
                    }  
                } catch (error) {
                    console.log(error);
                    return (
                        []
                    )
                }
                await page.waitFor(5000)
                await page.keyboard.press('Backspace');
               
  
        }


         
        } catch (error) {
            return console.log(error.message)
        }
        
        var sanitizedList = []
        for (let i = 0; i < test.length; i++) {
            var singleUl = test[i].split("\n")
            singleUl.map((l)=>{
              const singleLi = l.split(":")
              sanitizedList.push(singleLi)
            })
        }
        let finalResult = []
        for (let i = 0; i < sanitizedList.length-5; i=i+5) {
            var tempArrey = {}
            for (let j = i; j < i+5; j++) {
    
                var tempKey = sanitizedList[j][0]
                Object.assign(tempArrey, {[tempKey]: sanitizedList[j][1]});
            
            }
            finalResult.push(tempArrey)
          }
     console.log(finalResult[finalResult.length-1]); 
     browser.close()
     var xls = json2xls(finalResult);
     fs.writeFileSync(filename, xls, 'binary', (err) => {
         if (err) {
             console.log("writeFileSync error :", err);
         }
         console.log("The file has been saved!");
     });
    
    return finalResult
}

getStudents()