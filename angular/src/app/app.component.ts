import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: []
})
export class AppComponent {
  message: string = "Click the button to fetch data";

  constructor(private http: HttpClient) {}

  fetchMessage() {
    this.http.get('http://localhost:8080/api/message', { responseType: 'text' })
      .subscribe(response => {
        this.message = response;
      }, error => {
        console.error("Error fetching data:", error);
        this.message = error.message;
      });
  }
}
