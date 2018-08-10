import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';

  // constructor(private http: HttpClient) {
  // }
  //
  // ngOnInit(): void {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(
  //       function (response) {
  //         if (response.status !== 200) {
  //           console.log('Looks like there was a problem. Status Code: ' +
  //             response.status);
  //           return;
  //         }
  //
  //         // Examine the text in the response
  //         response.json().then(function (data) {
  //           console.log(data);
  //           return data;
  //         });
  //       }
  //     )
  //     .catch(function (err) {
  //       console.log('Fetch Error :-S', err);
  //     });
  // }
}
