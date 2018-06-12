/**
 * Created by RenukaThakurAdmin on 10/06/18.
 */
import {Component, ChangeDetectorRef} from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'add-screen',
    templateUrl: './add-screen.component.html',
    styleUrls: ['./add-screen.component.css']
})
export class AddScreenComponent {
    headerElNum:number;
    contentElNum:number;
    footerElNum:number;
    inProcess:boolean;
    addEl:number;
    constructor(private cdRef: ChangeDetectorRef,
                private router: Router) {

    }
    ngOnInit() {
        this.initiateCustomAddition();
    }

    get self(): AddScreenComponent {
        return this;
    }

    initiateCustomAddition(){
        this.headerElNum = 0;
        this.contentElNum = 0;
        this.footerElNum = 0;
        this.inProcess = false;
        this.addEl = 0;
    }

    initiateHeaderAddition(){
        if (!this.inProcess){
            this.inProcess = true;
            this.initiateCustomAddition();
            this.headerElNum++;
            this.addEl = 1;
        }
    }

    initiateContentAddition(){
        if (!this.inProcess){
            this.inProcess = true;
            this.initiateCustomAddition();
            this.contentElNum++;
            this.addEl = 2;
        }
    }

    initiateFooterAddition(){
        if (!this.inProcess){
            this.inProcess = true;
            this.initiateCustomAddition();
            this.footerElNum++;
            this.addEl = 3;
        }
    }

    saveNewElement(){
        this.initiateCustomAddition();
    }
}


