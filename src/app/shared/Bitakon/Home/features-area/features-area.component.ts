import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-area',
  templateUrl: './features-area.component.html',
  styleUrls: ['./features-area.component.scss']
})
export class FeaturesAreaComponent implements OnInit {

  featureData = [
    {
      bgColor:'',
      icon_dark:'assets/img/icon/features/features-icon-1.png',
      icon_light:'assets/img/icon/features/features-icon-1-light.png',
      title:"Stay in touch with <br /> your favorite artists or streamer",
      subtitle:'Buy things directly from them and support their work.',
    },
    {
      bgColor:'yellow-bg',
      icon_dark:'assets/img/icon/features/features-icon-2.png',
      icon_light:'assets/img/icon/features/features-icon-2-light.png',
      title:"Send <strong>Gifts</strong> to your <br /> favorite artists or streamer",
      subtitle:'Send to the streamer your Hoodie or T-shirt to wear it in the stream.',
    },
    {
      bgColor:'green-bg',
      icon_dark:'assets/img/icon/features/features-icon-3.png',
      icon_light:'assets/img/icon/features/features-icon-3-light.png',
      title:"Discover <br /> Top artists & Creators",
      subtitle:'Explore beautiful wearable stuff and buy it directly from them.',
    },
    {
      bgColor:'green-bg',
      icon_dark:'assets/img/icon/features/features-icon-4.png',
      icon_light:'assets/img/icon/features/features-icon-4-light.png',
      title:"One word: <br /> Connection",
      subtitle:'Create a pure connection between you and your favorite artist or streamer.',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
