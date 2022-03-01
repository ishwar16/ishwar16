// JS file of calculator Project
// Project : Oasis Infobyte, Web Dev, Level 2 : Task 1
// Code by Ishwar Shrinivas Gujjarwar, dated 15th Feb, 2022
 
 var screen=document.querySelector('#screen');
    var btn=document.querySelectorAll('.btn');

    /*============ For getting the value of btn, Here we use for loop ============*/
    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;

            if(btntext =='×')
            {
                btntext= '*';
            }

            if(btntext=='÷')
            {
                btntext='/';
            }
            screen.value+=btntext;
        });
    }

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
