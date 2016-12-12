import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-temp-unit-convertor',
  templateUrl: './temp-unit-convertor.component.html',
  styleUrls: ['./temp-unit-convertor.component.css']
})
export class TempUnitConvertorComponent implements OnInit {
   constructor(private router: Router) { }
 
 navigate() {
   this.router.navigate(["Home"]),
   this.router.navigate{["BMI"]};
 }
 
  ngOnInit() {
  }

function convertTemp(temperature) 
  {
    var temp;
    
    if (temperature == "C") {
      temp = document.getElementById("celcius").value * 9 / 5 + 32;
             document.getElementById("fahrenheit").value = Math.round(temp);
    } 
    else {
      temp = (document.getElementById("fahrenheit").value -32) * 5 / 9;
              document.getElementById("celcius").value = Math.round(temp);
    }
  }




function convertTemp2()
  {
    var temp2;

  if(document.getElementById("celcius").value !== null) {
      temp2 = document.getElementById("celcius").value * 9 / 5 + 32;
              document.getElementById("fahrenheit").value = Math.round(temp2);
  }
  else {
    temp2 = (document.getElementById("fahrenheit").value -32) * 5 / 9;
    document.getElementById("celcius").value = Math.round(temp2);
  }
  }
}
