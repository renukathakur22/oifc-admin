/**
 * Created by RenukaThakurAdmin on 11/06/18.
 */
import {Component, ChangeDetectorRef, Input} from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AddScreenComponent} from '../add-screen.component';


@Component({
    selector: 'screen-item',
    templateUrl: './screen-item.component.html',
    styleUrls: ['./screen-item.component.css']
})
export class ScreenItemComponent {

    elCount:number = 1;
    constructor(private cdRef: ChangeDetectorRef,
                private router: Router,
                private _parent: AddScreenComponent) {

    }

    @Input() set parent(value: AddScreenComponent ) {
        this._parent = value;
    }

    get parent(): AddScreenComponent {
        return this._parent;
    }

    ngOnInit() {
        console.log(this.parent.headerElNum);
    }
    cancelAdd(){
        this.parent.initiateCustomAddition();
    }
    saveAddition(){
        this.parent.saveNewElement();
    }
}