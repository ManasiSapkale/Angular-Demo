import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  title="manasi's world"

  username="manasiii"

  todaydate =new Date();
  student={
    name: "Manasi",
    class: "msc",
    marks:"350",
    phone:"2345676543"
  }
  weeks=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

}
