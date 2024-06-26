import {  OnInit } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from '../../common/nav/nav.component';
import { RouterLink } from '@angular/router';

// import { Swal } from 'sweetalert2';
// import Swal  from "sweetalert2"
// import { Swal } from 'sweetalert2';


@Component({
  selector: 'app-view-all-books',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,NavComponent,RouterLink],
  templateUrl: './view-all-books.component.html',
  styleUrl: './view-all-books.component.css'
})
export class ViewAllBooksComponent implements OnInit{
      private http;
      public bookList:any ={};
      public selectedBook :any;
      constructor(private httpCliant:HttpClient){
          this.http=httpCliant;
      }
      ngOnInit(): void {
          this.loadBooks();
      }
      loadBooks(){
        this.http.get('http://localhost:8080/book/get').subscribe((data)=>{
          this.bookList = data;
          console.log(this.bookList);
        });
      }
    
      deleteBook(){
        let api ="http://localhost:8080/book/"+this.selectedBook.id;
        this.http.delete(api,{responseType :'text'}).subscribe((responce:string) =>{
          console.log(responce);
          this.loadBooks();

          
          this.selectedBook=null;
        });
        // Swal.fire({
        //   title: "Deleted",
        //   text: `${this.selectedBook.title} book is Deleted`,
        //   icon: "success"
        // });
        
      }
      setSelectedBook(book:any){
        this.selectedBook=book;
        console.log("setSelectedBook"+book.id);  
      }
      saveBook(){
        let postApi="http://localhost:8080/book/add"
        this.http.post(postApi,this.selectedBook).subscribe(data=>{
          console.log("saved");
          this.loadBooks();
          this.selectedBook={};
        });
      } 
}
