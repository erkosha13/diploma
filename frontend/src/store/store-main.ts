import { makeAutoObservable } from "mobx";
import DiplomaWhite from "../assets/img/classic.png";
import DiplomaBlack from "../assets/img/black.png";
import DiplomaBlue from "../assets/img/blue.png";
import DiplomaCustom from "../assets/img/custom.png";
import DiplomaGreen from "../assets/img/green.png";
import DiplomaRed from "../assets/img/red.png";

class ImageStore {
  images = [
    DiplomaWhite,
    DiplomaBlack,
    DiplomaBlue,
    DiplomaCustom,
    DiplomaGreen,
    DiplomaRed,
  ];
  currentImageIndex = 0;

  constructor() {
    makeAutoObservable(this);
    this.startImageSlider();
  }

  startImageSlider() {
    setInterval(() => {
      this.setCurrentImageIndex(
        (this.currentImageIndex + 1) % this.images.length
      );
    }, 3000); // Интервал в миллисекундах (здесь 5000 мс = 5 секунд)
  }

  setCurrentImageIndex(index) {
    this.currentImageIndex = index;
  }

  getCurrentImage() {
    return this.images[this.currentImageIndex];
  }
}

const imageStore = new ImageStore();
export default imageStore;
