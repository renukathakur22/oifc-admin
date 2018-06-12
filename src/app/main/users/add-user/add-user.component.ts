/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Component, ChangeDetectorRef} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html'
})
export class AddUserComponent {


    constructor(private cdRef: ChangeDetectorRef,
                private router: Router) {

    }
    ngOnInit() {

    }
}
