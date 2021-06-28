import { LightningElement } from 'lwc';
export default class TakeHomeStarter extends LightningElement {
title = 'Full Stack Assignment ' + Date();
footer = "footer placeholder (c) 2021";



  doChange() {
    this.title += "1";
  }
}