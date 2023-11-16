import { Component, OnInit } from '@angular/core';
// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'
var Glide = require('src/assets/js/glide.min.js');

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initSlider();
  }

  initSlider() {
    let options = {
      type: "slider",
      animationDuration: 1000,
      autoplay: 0,
      focusAt: "0",
      startAt: 0,
      perView: 1,
      peek: {
        before: 0,
        after: 0
      }
    };

    new Glide('.glide', options).mount()

  }



}
