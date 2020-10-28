import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

export class ShowSnackBar{

  horizontalPosition : MatSnackBarHorizontalPosition;
  verticalPosition : MatSnackBarVerticalPosition;

  constructor(private _snackbar :MatSnackBar) {
  }



}
