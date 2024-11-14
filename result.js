function submit(){

    const credit = document.getElementsByClassName("credit");
    const gradeSelect = document.querySelectorAll('.grade'); 
    
    const creditArray=[];
    const gradeArray=[];
    let totalPoint=0;
    let totalCredit=0;


    for(let i=0; i<credit.length; i++){

       if(credit[i].value=="" || gradeSelect[i].value==""){
        alert("Your input is not correct");
        break;
      
       }
       else{
        creditArray.push(Number(credit[i].value));
        gradeArray.push(gradeSelect[i].value);
       }
        
    }

    for(let i=0; i<creditArray.length; i++){

        if(gradeArray[i]=="A+"){

            totalPoint+=(creditArray[i]*4.00);
            totalCredit+=creditArray[i];
        }

        if(gradeArray[i]=="A"){

            totalPoint+=(creditArray[i]*3.75);
            totalCredit+=creditArray[i];
        }

        if(gradeArray[i]=="A-"){

            totalPoint+=(creditArray[i]*3.50);
            totalCredit+=creditArray[i];
        }
        if(gradeArray[i]=="B+"){

            totalPoint+=(creditArray[i]*3.25);
            totalCredit+=creditArray[i];
        }
        if(gradeArray[i]=="B"){

            totalPoint+=(creditArray[i]*3.00);
            totalCredit+=creditArray[i];
        }
        if(gradeArray[i]=="B-"){

            totalPoint+=(creditArray[i]*2.75);
            totalCredit+=creditArray[i];
        }
        if(gradeArray[i]=="C+"){

            totalPoint+=(creditArray[i]*2.50);
            totalCredit+=creditArray[i];
        }
        if(gradeArray[i]=="C"){

            totalPoint+=(creditArray[i]*2.25);
            totalCredit+=creditArray[i];
        }
        if(gradeArray[i]=="D"){

            totalPoint+=(creditArray[i]*2.00);
            totalCredit+=creditArray[i];
        }
        if(gradeArray[i]=="F"){

            totalPoint+=(creditArray[i]*0.00);
            totalCredit+=creditArray[i];
        }
    }

const finalResult = (totalPoint/totalCredit).toFixed(2);

console.log(finalResult);

}