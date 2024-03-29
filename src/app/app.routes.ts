import { Routes } from '@angular/router';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { ViewAllBorrowerComponent } from './borrower/view-all-borrower/view-all-borrower.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { AddBooksComponent } from './page/view-allbook/add-books/add-books.component';

export const routes: Routes = [
    {
        path:"view-books",
        component : ViewAllBooksComponent
    },{
        path:"addbooks",
        component : AddBooksComponent
    },{
        path:"view-borrowers",
        component :  ViewAllBorrowerComponent
    },{
        path:"login",
        component : LoginComponent
    },{
        path:"register",
        component : RegisterComponent
    },{
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    }
];
