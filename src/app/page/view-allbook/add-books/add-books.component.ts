import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavComponent } from '../../../common/nav/nav.component';

@Component({
  selector: 'app-add-books',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule,NavComponent],
  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.css'
})
 
export class AddBooksComponent {
 constructor(private http:HttpClient){

 }
  public book: any = {
    isbn:"",
    title:"",
    author:"",
    category:"",
    qty:""
  }
  addBook() {
    console.log(this.book)
    this.http.post("http://localhost:8080/book/add",this.book).subscribe(data=>{
      console.log("add Book");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${this.book.title} Book Added`,
        showConfirmButton: false,
        timer: 1500
      });
    })
  }
}
