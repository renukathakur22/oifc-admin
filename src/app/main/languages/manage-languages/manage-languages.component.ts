/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Component, ChangeDetectorRef} from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'manage-languages',
  templateUrl: './manage-languages.component.html'
})
export class ManageLanguagesComponent {


  constructor(private cdRef: ChangeDetectorRef,
              private router: Router) {

  }
  ngOnInit() {

  }
}
