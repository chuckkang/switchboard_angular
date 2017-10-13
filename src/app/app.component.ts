import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  arrBox: Array<buttonStatus> = [];
  newButton = new buttonStatus(true, "red");
  setArrBox(){
		this.arrBox = [
			new buttonStatus(true, "red"),
			new buttonStatus(false, "green"),
			new buttonStatus(true, "red"),
			new buttonStatus(false, "green"),
			new buttonStatus(true, "red"),
		];
	}
	
	flipSwitch(index: number): void{
		console.log(index, "THIS IS THE INDEX OF THE BUTTON");
		if (this.arrBox[index].status == false)
		{
			this.arrBox[index].status = true;
			this.arrBox[index].color = "red";
		} else {
			this.arrBox[index].status = false;
			this.arrBox[index].color = "green";
		}
	}

	ngOnInit() {
		this.setArrBox();
	}
}

class buttonStatus{
	status: boolean;
	color: string;
	constructor(_status: boolean, _color: string){
		this.status = _status;
		this.color =_color;
	}
}
