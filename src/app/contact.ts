"use strict";

export class Contact {

	private name : string;
	private phone : string;
	private hide : boolean;

	constructor (name : string, phone : string) {
		this.name = name;
		this.phone = phone;
		this.hide = true;
	};

	toggle = function() {
		this.hide = !this.hide;
	};

}
