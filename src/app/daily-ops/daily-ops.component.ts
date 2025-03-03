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
      '1': 'https://dev.usthealthproofconnect.com/qliksense/single/?appid=4ee0d04a-525d-403b-9c3b-1f40d4fd5f0a&sheet=300f914f-8756-458d-9c37-b1c654ec45a0&theme=horizon&opt=ctxmenu,currsel%22',
      '2': 'https://dev.usthealthproofconnect.com/qliksense/single/?appid=4ee0d04a-525d-403b-9c3b-1f40d4fd5f0a&sheet=300f914f-8756-458d-9c37-b1c654ec45a0&theme=horizon&opt=ctxmenu,currsel%22'
    };

    this.dashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(urls[this.activeTab] || urls['1']);
  }
}
