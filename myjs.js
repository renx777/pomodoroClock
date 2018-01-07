$( document ).ready(function(){

    $('#start').on('click',function(){
        $('#start').prop("disabled",true)
         
         
         
         
       })
       
    // to handle animation
       $('#pause').on('click',function(){
        
         $('#mid').toggleClass('y');
         
        var value=$('#pause').text()

        if(value=="Pause"){
        $('#pause').text("UnPause")
       }else{
        $('#pause').text("Pause")
       }

       
    
    
    
    })

    
}



)





var pomo={
    session:false,
    anime:false,
    smin:$('#sminutes').text(),
    ssec:$('#sseconds').text(),
    bmin:$('#bminutes').text(),
    bsec:$('#bseconds').text(),
    pomosession:false,
    pomoPaused:false,
    paused:false,
    pomoBreak:false,
    brkpaused:false,
    reset:false,
    sessionTimer:function   sessionTimer(){
      $('#bot').css('background-color','red')
      $('.display').css('border','1px solid red');
        var min=$('#dmin').text();
     
          var sec=$('#dsec').text();
        var tix=$('#sminutes').text() *60 + 's';
          var a="#dmin";
          var b="#dsec";
        $('#mid').addClass('x');
        $('.x').css('animation-duration',tix)
        $('#mid').addClass('y');
        pomo.pomosession=true;
      
      pomo.pomoBreak=false;
      
         
          sec--;
          $(b).text(sec);
          
          if(sec<0){
          
          $(b).text(59);
          min--;
          $(a).text(min);
          
          }
          
          if(min==0 && sec==0){
          var mint=$('#bminutes').text();
           
          $('#dmin').text(mint);
          $('#dsec').text(0);
          clearInterval(sess);
           delete sess;
           pomo.pomosession=false;
          brks=window.setInterval(pomo.breakTimer,1000)
           $('#mid').removeClass('x');
     
      $('#mid').removeClass('y');
          
          }
   
          },   
    breakTimer:function breakTimer(){
      $('#bot').css('background-color','green')
      $('.display').css('border','1px solid green')
       $('#mid').addClass('x');
     var tiz=$('#bminutes').text()*60 + 's';
      $('#mid').addClass('y');
      
      
       pomo.pomosession=false;
      
      pomo.pomoBreak=true;
          var minx=$('#dmin').text();
          var secx=$('#dsec').text();
          var as="#dmin";
          var bs="#dsec";
          secx--;
          $(bs).text(secx);
      
      
          
          if(secx<0){
           $('.x').css('animation-duration',tiz)
          $(bs).text(59);
          minx--;
          $(as).text(minx);
          
          }
          
          if(minx==0 && secx==0){
          
         $('#mid').removeClass('x');
     
      $('#mid').removeClass('y');
          clearInterval(brks);
              
           delete brks;
              pomo.pomoBreak=false;
          pomo.start();
          
          }
   
   
          },
   
    start:function(){
     
     
         
         pomo.session=true;
       var mins=$('#sminutes').text();
      
   
         setTimeout(function(){
   
         $('#dmin').text(mins-1);
         $('#dsec').text(59);
   
      sess= window.setInterval(pomo.sessionTimer,1000);
   
          },1000);
      
     
     },
   resets:function(){
   pomo.reset=true;
     location.reload(true)
   
  },
   
//   increment session minutes
   sin:function(){
        var min=$('#sminutes').text();
         if(min<=59){
          min++;
          $('#sminutes').text(min)
         }
   
   
   
   },
// decrement session minutes
   sdec:function(){
      var min=$('#sminutes').text();
       if(min>1){
          min--;
          $('#sminutes').text(min)
       }
          
       },
//increment break minutes
   bin:function(){
        var brk=$('#bminutes').text();
         if(brk<=59){
          brk++;
          $('#bminutes').text(brk)
         }
       },
//decrement break minutes    
   bdec:function(){
      
          var brk=$('#bminutes').text();
         if(brk>1){
          brk--;
          $('#bminutes').text(brk)
         }
        
   
          },
// pause funtion timer,pauses depending upon whether it is break or pomodoro session
   pause:function(){
    //    pause and unpause pomodoro session
    if(pomo.pomosession==true && pomo.pomoPaused==false){
       
       window.clearInterval(sess);
           delete sess;
          console.log("pom sess paused")
         pomo.pomoPaused=true;
     }else if(pomo.pomosession==true && pomo.pomoPaused==true){
        console.log("pom sess unpaused")
       sess=window.setInterval(pomo.sessionTimer,1000);
          
         
       pomo.pomoPaused=false
     }
     //    pause and unpause break session
      if(pomo.pomoBreak==true && pomo.brkpaused==false){
        console.log("break sess paused")
       window.clearInterval(brks);
           delete brks;
        pomo.brkpaused=true;
     }else if(pomo.pomoBreak==true && pomo.brkpaused==true){
       console.log("break sess unpaused")
       brks=window.setInterval(pomo.breakTimer,1000); 
          
         pomo.brkpaused=false;
      }
     
       
 
   
    }
   
          
   }
   
   
   
   