import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class SnackbarService {

    constructor(
        private snackbar: MatSnackBar,
        private translate: TranslateService
    ) {
    }

    snackbarMessage(inputMessage: string, inputClose: string) {
        this.snackbar.open(inputMessage, inputClose, {
            duration: 5000
        });
    }

    snackbarTranslateMessage(inputMessage: string, inputClose: string) {
        let message: string;
        let close: string;
        this.translate.get(inputMessage).subscribe((translation: string) => {
            message = translation;
        });
        this.translate.get(inputClose).subscribe((translation: string) => {
            close = translation;
        });

        this.snackbar.open(message, close, {
            duration: 5000
        });
    }
}
