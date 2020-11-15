
const ClickByid = document.querySelectorAll('.Btn')
let ResultStr = document.querySelector('.EnterLine');
let StrTop = document.querySelector('.TopEnterLine');
let EndCalc;
let temp =[];

    function MatOper(operation){

        if(ResultStr.value.length != 0){
            StrTop.value += ResultStr.value + operation;
            ResultStr.value = '';
        }
      //  console.log(StrTop.value.length);
    }
    
    function ClearDisp(){
        ResultStr.value = '';
        StrTop.value = ''; 
        temp.length = 0;
    }
    function PlMin(){
        if(Math.sign(ResultStr.value) == 1){
            ResultStr.value = -Math.abs(ResultStr.value);
        }
        else{
            ResultStr.value = Math.abs(ResultStr.value);  
        }
        //console.log(Math.sign(ResultStr.value));

    }
    function CalcNow(val){
        switch(val){
                
            case "%":
                ResultStr.value = Math.pow(2,+ResultStr.value);
                break;
            case "SQ":
                ResultStr.value = Math.sqrt(ResultStr.value);
                break;
            case "CE": 
            case "C":  
            case "Escape":
                ClearDisp();
                break;
            case "PM":
                PlMin();
                break;
            case "=":
            case "Enter":
                StrTop.value += ResultStr.value;
                ResultStr.value = '';
                EndCalc = 1;
                StrTop.value += "="+Math.trunc(math.evaluate(StrTop.value)); 
                break;
            case "BS":
            case "Backspace": 
                temp.pop();
                ResultStr.value = temp.join('');
                break;
            case "+":
                MatOper("+");    
                break;
            case "-":
                MatOper("-");
                break;  
            case "*":
                MatOper("*");
                break; 
            case "/":
                MatOper("/");
                break;
            default:
            ResultStr.value += val;
            temp = ResultStr.value.split('');
            if(EndCalc != '') {
                 StrTop.value = '';
                 EndCalc = 0;
            }
        }

    }

    document.addEventListener('keydown', event => {
        if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Escape|Enter/)) CalcNow(event.key)
            console.log(event.key)
    })

    Array.from(ClickByid).forEach(el => {
        el.addEventListener('click', function (event) {
           
            CalcNow(event.target.id);
             //console.log(Object.keys(ResultStr.value))
        })
    })

