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

  handleDeleteEmployee() {
    this.confirmDelete.emit();
  }

}
