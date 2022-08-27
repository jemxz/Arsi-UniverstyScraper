// Simple test file

const test = 
    [
          'Full Name: Abdulahi Mohamed Jundi\n' +
          'Gender: Male\n' +
          'Program: B.A in Accounting and Finance (Undergraduate Regular)\n' +
          'Class Year: Fourth Year\n' +
          'Currently: Off Campus since end of 2016/17 First Semester',
          'Full Name: Abel Fikru Mekonnen\n' +
          'Gender: Male\n' +
          'Program: B.A in Accounting and Finance (Undergraduate Regular)\n' +
          'Class Year: Fourth Year\n' +
          'Currently: Off Campus since end of 2016/17 First Semester',
          'Full Name: Abyssinia Birhanu Fetene\n' +
          'Gender: Female\n' +
          'Program: B.A in Accounting and Finance (Undergraduate Regular)\n' +
          'Class Year: Fourth Year\n' +
          'Currently: Off Campus since end of 2016/17 First Semester',
          'Full Name: Adem Abdela Alisho\n' +
          'Gender: Male\n' +
          'Program: B.A in Accounting and Finance (Undergraduate Regular)\n' +
          'Class Year: Fourth Year\n' +
          'Currently: Off Campus since end of 2016/17 First Semester',
          'Full Name: Adisu Ashango Alambo\n' +
          'Gender: Male\n' +
          'Program: B.A in Accounting and Finance (Undergraduate Regular)\n' +
          'Class Year: Fourth Year\n' +
          'Currently: Off Campus since end of 2016/17 First Semester'
    ]


    var sanitizedList = []
    for (let i = 0; i < test.length; i++) {
        var singleUl = test[i].split("\n")
        singleUl.map((l)=>{
          const singleLi = l.split(":")
          sanitizedList.push(singleLi)
        })
    }
    let tempValue = []
    for (let i = 0; i < sanitizedList.length-5; i=i+5) {
        var tempArrey = {}
        for (let j = i; j < i+5; j++) {

            var tempKey = sanitizedList[j][0]
            Object.assign(tempArrey, {[tempKey]: sanitizedList[j][1]});
        
        }
        tempValue.push(tempArrey)
      } 
      console.log(tempValue);     
    