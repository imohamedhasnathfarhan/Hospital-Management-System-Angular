import { Component, AfterContentInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterContentInit {
  strengthChanged($event: number) {
    throw new Error('Method not implemented.');
  }
  public account = {
    password: null as unknown as string // Set password to null as string
  };
  public baseColor = '#FFF';
  public barLabel = 'Password strength:'; // Remove type declaration
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public thresholds = [90, 75, 45, 25];
  public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];
  public strength: number | undefined; // Add a union type of number and undefined

  constructor(private modalService: NgbModal, private changeDetectorRef: ChangeDetectorRef) { }

  openModal() {
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.name = 'Success';
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  employee: any = {};
}

@Component({
  selector: 'app-my-modal',
  template: `

<style>
      .modal-header {
        background-color: #4285f4;
      }
    </style>
    <div class="modal-header">
      <h4 class="modal-title" style="color: white;">Authentication, {{name}}!</h4>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <b><p style="color: dark grey;">Login Successful.</p></b>
    </div>
  `
})
export class MyModalComponent implements OnInit {
  name!: string;
  timeLimit = 5000; // time limit in milliseconds (5 seconds)

  constructor(public modal: NgbActiveModal) {}

  ngOnInit() {
    setTimeout(() => {
      this.modal.close();
    }, this.timeLimit);
  }
}
