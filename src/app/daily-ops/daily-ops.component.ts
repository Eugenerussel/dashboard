import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-daily-ops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-ops.component.html',
  styleUrls: ['./daily-ops.component.css']
})
export class DailyOpsComponent{
  activeTab: string = '1';  
  dashboardUrl: SafeResourceUrl | null = null; 

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  setActiveTab(tab: string) {
    if (this.activeTab !== tab) {
      this.router.navigate(['/dashboard', tab]); 
      this.activeTab = tab;
      this.updateDashboardUrl();
    }
  }

  updateDashboardUrl() {
    const urls: { [key: string]: string } = {
      '1': 'https://www.wikipedia.org',
      '2': 'https://www.angular.io'
    };

    this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urls[this.activeTab] || urls['1']);
  }
}
