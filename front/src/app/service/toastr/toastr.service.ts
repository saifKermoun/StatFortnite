import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorService {

  constructor(private toastr: ToastrService) { }

  iconClasses = {
    error: 'toast-error',
    info: 'toast-info',
    success: 'toast-success',
    warning: 'toast-warning',
    timeOut: 3000,
    progressBar: true,
    positionClass: 'toast-bottom-right'
  };
  public handleError(title ,msg) {

    this.toastr.error(title, msg, this.iconClasses);
  }

  private snackBar (msg) {
    // Get the snackbar DIV
    const x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = 'show';
    x.textContent = msg;

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() { x.className = x.className.replace('show', ''); }, 3000);
  }

}
