/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Component, ChangeDetectorRef} from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'manage-users',
  templateUrl: './manage-users.component.html'
})
export class ManageUsersComponent {


  constructor(private cdRef: ChangeDetectorRef,
              private router: Router) {

  }
  ngOnInit() {

  }
}
