import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'InputOutputLifeCycle';
  // counterNo = 0;
  msgSignal = "Hello World";

  // incrementCounter(){
  //   this.counterNo++;
  // }

  // recievedMsg(e:any){
  //   this.msgSignal = e
  //   console.log(this.msgSignal);
  // }
}
