import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  urlShortnerData: {} | any;

  model = {
    inputUrl: '',
  };

  isLoading = false;

// Implementing OnInit
  constructor(private api: ApiService) {}

  ngOnInit() {
    // API Call
    this.api.getUrlShortener().subscribe((data) => {
      this.urlShortnerData = data;
      console.log(data)
    });
  }

  onSubmitUrlForm(urlForm: any) {
    console.warn('Form submitted!!');
  }
}
