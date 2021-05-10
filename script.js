/* --- creating out structure--- */


var div = document.createElement('div');
var p_div = document.createElement('div');
var c1_div= document.createElement('div');
var c2_div= document.createElement('div');
var c3_div = document.createElement('div');

p_div.innerHTML='CALCULATOR';
p_div.style.textAlign='center';
p_div.style.fontSize='25px';
p_div.style.color='#24ACF2';

/*---container creation----*/

c3_div.setAttribute('class','container');

/*--- creating p tag in c1 div---- */

var p1 = document.createElement('p');

p1.style.width='100%';
p1.style.height='100%';
// p1.style.border='1px solid black';
c1_div.append(p1);

/*-----creating p tag in c2 div to display result---- */

var p2 = document.createElement('p');
c2_div.append(p2);
p2.style.width='100%';
p2.style.height='100%';
// p2.style.border='1px solid black';
p2.innerHTML=0; 


/*--- 4rows and 4col for each row--- */

var c3_row1 = document.createElement('div');
c3_row1.setAttribute('class','row');
var c3_row2 = document.createElement('div');
c3_row2.setAttribute('class','row');
var c3_row3 = document.createElement('div');
c3_row3.setAttribute('class','row');
var c3_row4 = document.createElement('div');
c3_row4.setAttribute('class','row');

var c3_col1 = document.createElement('div');
c3_col1.setAttribute('class','col-12');

var c3_col2 = document.createElement('div');
c3_col2.setAttribute('class','col-12');

var c3_col3 = document.createElement('div');
c3_col3.setAttribute('class','col-12');

var c3_col4 = document.createElement('div');
c3_col4.setAttribute('class','col-12');

/* ---creating buttons inside container--- */

createbutton('button','7',c3_col1);
createbutton('button','8',c3_col1);
createbutton('button','9',c3_col1);
createbutton('button','+',c3_col1);


createbutton('button','4',c3_col2);
createbutton('button','5',c3_col2);
createbutton('button','6',c3_col2);
createbutton('button','-',c3_col2);


createbutton('button','1',c3_col3);
createbutton('button','2',c3_col3);
createbutton('button','3',c3_col3);
createbutton('button','*',c3_col3);


createbutton('button','C',c3_col4);
createbutton('button','0',c3_col4);
createbutton('button','=',c3_col4);
createbutton('button','/',c3_col4);


/* ---appending col in rows-- */

c3_row1.append(c3_col1);
c3_row2.append(c3_col2);
c3_row3.append(c3_col3);
c3_row4.append(c3_col4);

/*---appending rows in container--- */

c3_div.append(c3_row1,c3_row2,c3_row3,c3_row4);

/*---appending all div's in body--- */

p_div.append(c1_div,c2_div,c3_div);
div.append(p_div);
document.body.append(div);

/*---button click---- */

var result=0, res2=1, res2=1;
var res3=1,res4=1;

document.getElementById('=').addEventListener('click',function(){
    var x =  p1.innerHTML;
    p1.innerHTML=x.slice(0,x.length-1);
    var res = mathcalc(str.slice(0,str.length-1));
    p2.innerHTML=res;
});

document.getElementById('C').addEventListener('click',function(){
    p2.innerHTML=0;
    p1.innerHTML='';
    str='';
    result=0;
    res2=1;
    res4=1;
    // console.log(str);
});




/*---functions---- */

function mathcalc(str){
    var arr = str.split('');
    // console.log(arr);

    var i=0,count=0;
    var str1='';
    var dum=0;
    for(i=0;i<arr.length;i++)
    {
        
        var dummy = arr[i];
        // console.log(dummy);
        if(parseInt(dummy)>=0)
        {
            str1+=arr[i];
            // console.log(str1);
        }
        else{
            if(arr[i]==='+'){
                if(dum===2){
                    subtnum(str1);
                    str1='';
                    dum=1;
                }
                else if(dum===3){
                    result=mulnum(str1);
                    str1='';
                    dum=1;
                }
                else{
                addnum(str1);
                str1='';
                dum=1;
                }
            }
            else if(arr[i]==='-')
            {
                if(dum===3){
                    result=mulnum(str1);
                    // console.log(result,'result');
                    str1='';
                    dum=2;
                }
                else
                {
                    if(count===0)
                    {
                        var minus = parseInt(str1);
                        minus*=-1;
                        var strr = minus.toString();
                        subtnum(strr);
                        str1='';
                        dum=2;
                    }
                    else{
                    subtnum(str1);
                    str1='';
                    dum=2;
                    }
                    count++;
                }

            }
            else if(arr[i]==='/'){
                // console.log('division');
                divnum(str1);
                str1='';
                dum=4;
            }
            else if(arr[i]='*'){
                if(dum===1){
                    addnum(str1);
                    str1='';
                    dum=3;
                }
                else if(dum===2){
                    subtnum(str1);
                    str1='';
                    dum=3;
                }
                else{
                mulnum(str1);
                str1='';
                dum=3;
                }
            }
        }
    }
    // console.log('count',count);
    if(dum==1)
    return addnum(str1);
    else if(dum==2)
    {
        return subtnum(str1);
    }
    else if(dum==3)
    {
        if(result===0)
        result=1;
        result*=mulnum(str1);
        // console.log('result:',result);
        return result
    }   
    else{
        result=divnum(str1);
        return result;
    }
}

function addnum(strx)
{
    // console.log(strx);
    var y = parseInt(strx);
    // console.log(y);
    result+=y;
    // console.log(result);
    return result;
}

function subtnum(strx){
    var y = parseInt(strx);
    // console.log('minus');
    result-=y;
    // console.log(result);
    return result;
}
function mulnum(strx){
    var y = parseInt(strx);
    // console.log(y);
    res2*=y;
    // console.log(res2);
    return res2;
}

function divnum(strx)
{
    var y = parseInt(strx);
    if(res4===1)
    {
        res2=y;
        res4++;
    }
    else
    {
        res2/=y;
    }
    // console.log(res2);
    return res2;
}

function createbutton(element='', value='',z){
    var x = document.createElement(element);
    x.setAttribute('id',value);
    x.setAttribute('onclick',`displaynumber('${value}')`);
    x.innerHTML=value;
    x =btnstyle(x);    
    z.append(x);
}

function displaynumber(x)
{
    merging(x);
}


var str='';
function merging(x)
{
    str+=x;
    // console.log(str);
    p1.innerHTML=str;
}


function btnstyle(x)
{
    x.style.border='1px solid #A6E22E';
    x.style.backgroundColor='#272822';
    x.style.color='white';
    x.style.fontSize='20px';
    x.style.borderRadius='50px';
    x.style.width='40px';
    x.style.height='40px';
    return x;
}

/*---styling--- */
p_div.style.width='80%';
p_div.style.height='400px';
p_div.style.border='1px solid  black';
p_div.style.borderRadius='10px';
p_div.style.display='flex';
p_div.style.flexDirection='column';
p_div.style.padding='20px';
p_div.style.backgroundColor='#F1F1F1';
p_div.style.boxShadow=' 0 4px 8px 0 #C1C1C1';


div.style.width='30%';
div.style.height='auto';
div.style.display='flex';
div.style.justifyContent='center';
div.style.alignItems='center';
div.style.margin='10% 35%';


c1_div.style.width='100%'
c1_div.style.height='10%';
// c1_div.style.border='1px solid blue';
c1_div.style.marginBottom='15px';
c1_div.style.textAlign='right';
c1_div.style.color='black';


c2_div.style.width='100%'
c2_div.style.height='10%';
c2_div.style.backgroundColor='white';
c2_div.style.textAlign='right';
c2_div.style.color='#E44F26';

// c3_div.style.border='1px solid red';
c3_div.style.width='100%'
c3_div.style.height='75%';
c3_div.style.paddingTop='20%';

c3_col1.style.display='flex';
c3_col1.style.justifyContent='space-between';

c3_col2.style.display='flex';
c3_col2.style.justifyContent='space-between';

c3_col3.style.display='flex';
c3_col3.style.justifyContent='space-between';

c3_col4.style.display='flex';
c3_col4.style.justifyContent='space-between';

c3_div.style.display='flex';
c3_div.style.flexDirection='column';
c3_div.style.justifyContent='space-between';

