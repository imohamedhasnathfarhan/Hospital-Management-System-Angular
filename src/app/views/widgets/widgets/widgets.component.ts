import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WidgetsComponent implements AfterContentInit {
  public account = {
    password: null as unknown as string // Set password to null as string
  };
  public baseColor = '#FFF';
  public barLabel = 'Password strength:'; // Remove type declaration
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public thresholds = [90, 75, 45, 25];
  public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];
  public strength: number | undefined; // Add a union type of number and undefined

  strengthChanged(strength: number) {
    this.strength = strength;
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}