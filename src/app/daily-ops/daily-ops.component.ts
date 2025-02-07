import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-daily-ops',
  imports: [CommonModule,RouterLink],
  templateUrl: './daily-ops.component.html',
  styleUrl: './daily-ops.component.css'
})
export class DailyOpsComponent {
  activeTab: string='1';  // To keep track of the active tab
  basePath: string = '';

  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    // Subscribe to route parameter changes to switch the active tab
    this.route.params.subscribe(params => {
      this.activeTab = params['id'] || '1';  // Get the active tab id from the route (1 or 2)
    });
     // Detect if running inside host app (host uses "/business-ops/")
     this.basePath = this.router.url.includes('businessOperation/dailyOperation') 
     ? '/businessOperation/dailyOperation' 
     : '';
  
  }
}
