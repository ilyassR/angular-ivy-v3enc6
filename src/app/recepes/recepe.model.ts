export class Recepe {
  public name: string;
  public description: string;
  public imagePath: string;
  public isActive: boolean;

  constructor(name: string, desc: string, imgPath: string, isActive: boolean) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
    this.isActive = isActive;
  }
}