
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

    Array.from(ClickByid).forEach(el => {
        el.addEventListener('click', function (event) {
           
            
            
            switch(event.target.id){
                
                case "%":
                    ResultStr.value = Math.pow(2,+ResultStr.value);
                    break;
                case "SQ":
                    ResultStr.value = Math.sqrt(ResultStr.value);
                    break;
                case "CE": 
                    ClearDisp();
                    break;
                case "C":  
                    ClearDisp();
                    break;
                case "PM":
                    PlMin();
                    break;
                case "=":
                    StrTop.value += ResultStr.value;
                    ResultStr.value = '';
                    EndCalc = 1;
                    StrTop.value += "="+Math.trunc(math.evaluate(StrTop.value)); 
                    break;
                case "BS": 
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
                ResultStr.value += event.target.id;
                temp = ResultStr.value.split('');
                if(EndCalc != '') {
                     StrTop.value = '';
                     EndCalc = 0;
                }
            }
            
                
           

            
             //console.log(Object.keys(ResultStr.value))
        })
    })

