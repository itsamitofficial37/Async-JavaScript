const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function chageText(element, text,color , time , onSuccessCallback, onFailureCallback){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve()
    
            }else{
               reject();
            }
            
        }, time)
    })
   
}

chageText(heading1,"hello", "blue",2000).then(()=> {
    return chageText(heading2,"Amit", "Green",2000).then(()=>{
        return chageText(heading3,"Upender", "cyan",2000).then(()=> {
            return chageText(heading4,"Sagae", "Orange",2000).then(()=> {
                return chageText(heading5,"Prince", "red",2000).then(()=> {
                    return chageText(heading6,"Vipin", "Pink",2000)
                })
            })
        })
    })
    
})
