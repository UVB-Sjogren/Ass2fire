import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-verify-em',
  templateUrl: './verify-em.component.html',
  styleUrls: ['./verify-em.component.css']
})
export class VerifyEmComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
  }
}
