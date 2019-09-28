import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cliente-header',
  templateUrl: './cliente-header.component.html',
  styleUrls: ['./cliente-header.component.css']
})
export class ClienteHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(): void {
    this.router.navigateByUrl('/personal');
  }

}
