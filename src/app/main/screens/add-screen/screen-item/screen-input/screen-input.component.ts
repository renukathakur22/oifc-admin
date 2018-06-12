/**
 * Created by RenukaThakurAdmin on 11/06/18.
 */
import {Component, ChangeDetectorRef} from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'screen-input',
    templateUrl: './screen-input.component.html',
    styleUrls: ['./screen-input.component.css']
})
export class ScreenInputComponent {


    constructor(private cdRef: ChangeDetectorRef,
                private router: Router) {

    }
    ngOnInit() {

    }
}