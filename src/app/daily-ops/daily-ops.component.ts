import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-daily-ops',
  imports: [CommonModule,RouterLink],
  templateUrl: './daily-ops.component.html',
  styleUrl: './daily-ops.component.css'
})
export class DailyOpsComponent {
  activeTab: string='1';  // To keep track of the active tab

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to route parameter changes to switch the active tab
    this.route.params.subscribe(params => {
      this.activeTab = params['id'] || '1';  // Get the active tab id from the route (1 or 2)
    });
  }
}
