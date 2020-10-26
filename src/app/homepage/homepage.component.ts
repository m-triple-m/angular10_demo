import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  name = "Mubassir";
  num = 65;

  batman = "https://pmcvariety.files.wordpress.com/2020/08/1182-the-batman-dc-fandome-teaser-youtube-5.png?w=681&h=383&crop=1";
  ironman = 'https://cdn.vox-cdn.com/thumbor/KKkay3BEbYms0TYUBGPdfvRk-2Q=/0x0:2100x1181/1200x800/filters:focal(882x423:1218x759)/cdn.vox-cdn.com/uploads/chorus_image/image/67410583/marvel_avengers_a_day_prologue.0.jpg';

  constructor() { }

  ngOnInit(): void {

    let ans = this.fact(this.num);

    console.log(ans);
  }

  fact(n){
    let f= 1;

    for(let i=1;i<=n;i++){
      f*=i;
    }

    return f;
  }

  showMessage(){
    alert("You clicked that button, now see what happens!!");
  }

  changeMessage(){
    console.log("Input value changed!!");
  }

}
