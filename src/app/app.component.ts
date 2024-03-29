import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { ViewAllBorrowerComponent } from './borrower/view-all-borrower/view-all-borrower.component';
import { AddBooksComponent } from './page/view-allbook/add-books/add-books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,ViewAllBooksComponent,ViewAllBooksComponent,ViewAllBorrowerComponent,AddBooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-manage-frontend';
}
