export class Town{

	constructor(
		public _id: string,
		public codeINE: string,
		public name: string,
		public province: string,
		public latitude: number,
		public longitude: number,
		public altitude: number,
		public area: number,
		public population: number,
		public year: number
		){}
}