/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Component, ChangeDetectorRef} from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'manage-screens',
  templateUrl: './manage-screens.component.html',
  styleUrls: ['./manage-screens.component.css']
})
export class ManageScreensComponent {


  constructor(private cdRef: ChangeDetectorRef,
              private router: Router) {

  }
  ngOnInit() {

  }
}
