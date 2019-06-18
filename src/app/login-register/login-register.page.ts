import { Component, OnInit, ViewChild } from '@angular/core';
import {
	AbstractControl,
	ReactiveFormsModule,
	FormControl,
	FormGroup,
	FormBuilder,
	Validators,
	ValidatorFn,
	FormsModule,
	FormGroupDirective,
	FormArray
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


import { GlobalService } from '../services/global.service';
import { RestService } from '../services/rest.service';
import { ApiurlsService } from '../services/apiurls.service';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.page.html',
  styleUrls: ['./login-register.page.scss'],
})
export class LoginRegisterPage implements OnInit {
	selectedSegment: any = 'Login';
	loginform: FormGroup;
	registerform: FormGroup;

	validateLogin: boolean = false;
	validateRegister: boolean = false;


	@ViewChild('formLoginDir') formLoginDir: FormGroupDirective;
	@ViewChild('formRegisterDir') formDir: FormGroupDirective;
	
  	constructor(
		public globalService: GlobalService,
		public apiurlService: ApiurlsService,
		public restService: RestService,
		private router: Router,
    private route: ActivatedRoute
	) { }

  ngOnInit() {
		this.initializeForm();
	}
	
	initializeForm() {
		this.loginform = new FormGroup({
			username: new FormControl('', [
				Validators.required
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.pattern('^((?=.*\\d+)(?=.*[a-z])|(?=.*[A-Z]))[0-9a-zA-Z!@#$%_]{6,20}$')
			]),
		});

		this.registerform = new FormGroup({
			username: new FormControl('', [
				Validators.required
			]),
			password: new FormControl('', [
				Validators.required,
				Validators.pattern('^((?=.*\\d+)(?=.*[a-z])|(?=.*[A-Z]))[0-9a-zA-Z!@#$%_]{6,20}$')
			]),
			email: new FormControl('', [
				Validators.required,
				Validators.email
			]),
			phone: new FormControl('', [
				Validators.required,
				Validators.pattern("^[0-9]{10}$")
			]),
			securityCode: new FormControl('', [
				Validators.required
			]),
		});
	}

	segmentChanged(ev) {
		this.validateLogin = false;
		this.validateRegister = false;
		console.log(this.selectedSegment);
	}

	initiateLogin() {
		this.validateLogin = true;

		console.log(this.loginform.value);

		if (!!this.loginform.valid) {			
			this.restService.login(this.loginform.value).subscribe((data)=>{
				if(!!data.loginSuccess) {
					localStorage.setItem("isLoggedIn", "true");
					this.router.navigate(['/tabs/profile']);
				} else {
					localStorage.setItem("isLoggedIn", "false");
					let alertObject = {
						header: 'Error',
      			subHeader: 'alertObject.subHeader',
      			message: 'Please enter correct username / password'
					}
					this.globalService.presentAlert(alertObject);
				}
			})
		}
	}

	initiateRegister() {
		this.validateRegister = true;

		console.log(this.loginform.value);

		if (!!this.registerform.valid) {
			console.log(this.registerform.value);			
			/*this.restService.login(this.registerform.value).subscribe((data)=>{
				if(!!data.loginSuccess) {
					localStorage.setItem("isLoggedIn", "true");
					this.router.navigate(['/tabs/profile']);
				} else {
					localStorage.setItem("isLoggedIn", "false");
					let alertObject = {
						header: 'Error',
      			subHeader: 'alertObject.subHeader',
      			message: 'Please enter correct username / password'
					}
					this.globalService.presentAlert(alertObject);
				}
			})*/
		}
	}
}
