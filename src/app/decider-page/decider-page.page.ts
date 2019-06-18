import { Component, OnInit } from '@angular/core';
import {
	Router,
    ActivatedRoute,
    Params
} from '@angular/router';

@Component({
  selector: 'app-decider-page',
  templateUrl: './decider-page.page.html',
  styleUrls: ['./decider-page.page.scss'],
})
export class DeciderPagePage implements OnInit {
	public is_login: any = true;

  	constructor(private router: Router, private route: ActivatedRoute) { }

  	ngOnInit() {
  		/*if(!!this.is_login) {
  			this.router.navigate(['/tabs/profile']);
  		}*/
  	}

}
