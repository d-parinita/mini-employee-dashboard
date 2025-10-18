import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent {

  @Input() conFirmTitle: any = ''
  @Input() conFirmText: any = ''
  @Input() btnText: any = ''
  @Output() confirm = new EventEmitter<void>();
  @ViewChild('confirmModal') confirmModal!: ElementRef<HTMLDialogElement>;

  openModal() {
    if (this.confirmModal) {
      this.confirmModal.nativeElement.showModal();
    }
  }

  closeModal() {
    if (this.confirmModal && this.confirmModal.nativeElement.open) {
      this.confirmModal.nativeElement.close();
    }
  }

  handleConfirmEmployee() {
    this.confirm.emit();
    this.closeModal()
  }

}
