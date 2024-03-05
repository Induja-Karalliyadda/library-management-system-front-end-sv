import { Routes } from '@angular/router';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { ViewAllBorrowerComponent } from './borrower/view-all-borrower/view-all-borrower.component';

export const routes: Routes = [
    {
        path:"view-books",
        component : ViewAllBooksComponent
    },
    {
        path:"view-borrowers",
        component :  ViewAllBorrowerComponent
    }
];
