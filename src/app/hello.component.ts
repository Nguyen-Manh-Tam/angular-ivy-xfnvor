import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  ngOnInit() {
    console.log('Hi Init');
  }

  ngOnDestroy() {
    console.log('Hi Destroy');
  }
}
