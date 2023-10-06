import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  imgsrc="https://w0.peakpx.com/wallpaper/721/529/HD-wallpaper-m-s-dhoni-dhoni-forever-dhoni-ms-dhoni-happy-birtay-dhoni-07-dhoni-7-iammsa-hbd-dhoni-msd-thumbnail.jpg";

  username:any;

  sayhello(){
    alert("hello user")
  }
}
