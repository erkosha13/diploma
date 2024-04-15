import { makeAutoObservable } from "mobx";

class ModalStore {
  isVisible = false;
  activeModal: "signup" | "login" | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  openModal(modalType: "signup" | "login") {
    this.activeModal = modalType;
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
    this.activeModal = null;
  }
}

export const modalStore = new ModalStore();
