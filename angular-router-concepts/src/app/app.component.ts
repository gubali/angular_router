import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-router-concepts';
  public testVar = 'user-details';
  constructor(private router: Router, private route:ActivatedRoute) { }
  dynamicRoute() {
    this.router.navigate(['/thumbnail'], {relativeTo: this.route});
    //this.router.navigate(['/thumbnail'], {relativeTo: this.route}); extar line added

  }
}
