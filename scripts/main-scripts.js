
// function definition to display time.

function currentTime() {
  //fuction variables 
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayOrNight= "AM";

  //conditional logic to determine between AM/PM
    if(hours == 0){
        hours += 12;
        dayOrNight = "AM";
    }

    if(hours > 12){
        hours -= 12;
        dayOrNight = "PM";
     }
  
     hours = (hours < 10) ? "0" + hours : hours;
     minutes = (minutes < 10) ? "0" + minutes : minutes;
     seconds = (seconds < 10) ? "0" + seconds : seconds;
      
  //variable to be used to render time
     let time = `${hours} : ${minutes} : ${seconds} : ${dayOrNight}`;
  
    document.getElementById("clock").innerText = time; 

  //this line of code will cause the function to repeat every 1 sec once called.   
    setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();


//function definition to display day of week and date.

function currentDay() {
  //function variables
    let currentDayTime = new Date();
    let todaysDate = currentDayTime.getDate(); 
    let toDay = currentDayTime.getDay();
    let month = currentDayTime.getMonth();
    let year = currentDayTime.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
    let thisday = " ";
    
  //use of forEach method to iterate over the array and compare the index to each element index.
  
    days.forEach((day,index)=>{
        if(index == toDay){
            return thisday += day; 
            }
          }
      );

    document.getElementById("date").innerHTML =
      thisday + ", "+  months[month] +
        "  " + todaysDate + "  " + year;
}
  currentDay();
