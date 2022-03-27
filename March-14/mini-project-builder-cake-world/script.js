/* Fill your code*/
 let total = 0;
 let flagc = 0;
 let flags = 0;
 let flagb = 0;
 let flagv = 0;
 let flagr = 0;

 document.getElementById("candle").style.visibility="hidden"

 function btnchoc()
 {
     if(flagc==0)
     {
         document.getElementById("cake-chocolate").style.display="block"
         document.getElementById("lic").style.visibility="visible"
         console.log("working");
         total=total+300;
         flagc=1;
         if(total === 1200)
         {
             document.getElementById("candle").style.visibility="visible"    
         }
     }
     else
     {
         document.getElementById("cake-chocolate").style.display="none"
         document.getElementById("lic").style.visibility="hidden"
         console.log("working here")
         total=total-300;
         flagc=0;
         if(total !== 1200)
         {
             document.getElementById("candle").style.visibility="hidden"    
         }
     }
 }

 function btnstraw()
 {
     if(flags==0)
     {
         document.getElementById("cake-strawberry").style.display="block"
         document.getElementById("lis").style.visibility="visible"
         console.log("working")              

         total=total+100;
         flags=1;
         if(total === 1200)
         {
             document.getElementById("candle").style.visibility="visible"    
         }
     }
     else
     {
         document.getElementById("cake-strawberry").style.display="none"
         document.getElementById("lis").style.visibility="hidden"
         console.log("working here")
         total=total-100;
         flags=0;
         if(total !== 1200)
         {
             document.getElementById("candle").style.visibility="hidden"    
         }
     }
 }
 function btnbutter()
 {
     if(flagb==0)
     {
         document.getElementById("cake-butterscotch").style.display="block"
         document.getElementById("lisb").style.visibility="visible"
         console.log("working")

         total=total+200;
         flagb=1;
         if(total === 1200)
         {
             document.getElementById("candle").style.visibility="visible"    
         }
     }
     else
     {
         document.getElementById("cake-butterscotch").style.display="none"
         document.getElementById("lisb").style.visibility="hidden"
         console.log("working here")
         total=total-200;
         flagb=0;
         if(total !== 1200)
         {
             document.getElementById("candle").style.visibility="hidden"    
         }
     }

 }

 function btnvannila()
 {
     if(flagv==0)
     {
         document.getElementById("cake-vannila").style.display="block"
         document.getElementById("lisv").style.visibility="visible"
         console.log("working")
         total=total+300;
         flagv=1;
         if(total === 1200)
         {
             document.getElementById("candle").style.visibility="visible"    
         }
     }
     else
     {
         document.getElementById("cake-vannila").style.display="none"
         document.getElementById("lisv").style.visibility="hidden"
         console.log("working here")
         total=total-300;
         flagv=0;
         if(total !== 1200)
         {
             document.getElementById("candle").style.visibility="hidden"    
         }
     }
 }

 function btnredvelvet()
 {
     if(flagr==0)
     {
         document.getElementById("cake-redvelvet").style.display="block"
         document.getElementById("lisr").style.visibility="visible"
         console.log("working")
         total=total+300;
         flagr=1;
         if(total === 1200)
         {
             document.getElementById("candle").style.visibility="visible"    
         }
     }
     else
     {
         document.getElementById("cake-redvelvet").style.display="none"
         document.getElementById("lisr").style.visibility="hidden"
         console.log("working here")
         total=total-300;
         flagr=0;
         if(total !== 1200)
         {
             document.getElementById("candle").style.visibility="hidden"    
         }
     }
 }
 if(total<0)
 {
     total=0;
 }
 function btnbuy()
 {
    document.getElementById("candle").style.visibility="visible"
    alert(`Total Bill Amount is : ${total}`)
 }