import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {

  @Output() confirmDelete = new EventEmitter<void>();
  @ViewChild('deleteModal') deleteModal!: ElementRef<HTMLDialogElement>;

  openModal() {
    if (this.deleteModal) {
      this.deleteModal.nativeElement.showModal();
    }
  }

  closeModal() {
    if (this.deleteModal && this.deleteModal.nativeElement.open) {
      this.deleteModal.nativeElement.close();
    }
  }

  handleDeleteEmployee() {
    this.confirmDelete.emit();
    this.closeModal()
  }

}
