// modal-store.ts
import { makeAutoObservable } from "mobx";

class ModalStore {
  isVisible = false;
  showLogin = true; 

  constructor() {
    makeAutoObservable(this);
  }

  toggleModal() {
    this.isVisible = !this.isVisible;
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }

  toggleLoginSignup() {
    this.showLogin = !this.showLogin;
  }
}

export const modalStore = new ModalStore();
