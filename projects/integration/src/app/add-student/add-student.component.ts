import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [],
      password: []
    });
  }

  ngOnInit(): void {
  }
  httpRequest(email, password): Observable<any> {
    return new Observable((observer) => {
      setTimeout(() => {
        if (password !== '123') {
          console.log(email, typeof password, password !== '123')
          observer.error('Wrong password');
        }
        console.log('hello');
        observer.next({ email, password });
        observer.complete();
      }, 1000);
    });
  }
  onSubmit(): Observable<any> {
    const { email, password } = this.form.value;
    return this.httpRequest(email, password).pipe(
      tap((resp) => {
        alert(`${JSON.stringify(resp)}`);
      }), catchError((err) => {
        alert(err);
        return throwError(err);
      }));
  }
}
