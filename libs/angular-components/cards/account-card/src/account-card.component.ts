import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { SkeletonTextComponent } from '../../../skeleton-text/src/skeleton-text.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgIf, CurrencyPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'uxg-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, NgClass, NgIf, MatIconModule, MatDividerModule, CurrencyPipe]
})
export class AccountCardComponent implements OnInit, OnDestroy {
  @Input() name?: string;
  @Input() balance?: number;
  @Input() currency?: string;
  @Input() number?: string;
  @Input() icon = 'credit_card';
  @Input() iconAriaLabel = 'Credit Card';
  @Input() selectable?: boolean;
  @Input() selected?: boolean;
  @Input() selectedWithCheckIcon?: boolean;

  ngOnInit() {
    if (this.selected) {
      this.selectable = true;
    }
  }
  ngOnDestroy() {}

  public onCardClick() {
    if (this.selectable) {
      this.selected = !this.selected;
    }
  }
}

// Skeleton
@Component({
  selector: 'uxg-account-card-skeleton',
  templateUrl: './account-card.skeleton.html',
  styleUrls: ['./account-card.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatIconModule, SkeletonTextComponent, MatDividerModule]
})
export class AccountCardSkeletonComponent {}
