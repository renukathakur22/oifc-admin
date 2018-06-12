/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Component, ChangeDetectorRef} from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'add-language',
    templateUrl: './add-language.component.html'
})
export class AddLanguageComponent {


    constructor(private cdRef: ChangeDetectorRef,
                private router: Router) {

    }
    ngOnInit() {

    }
}