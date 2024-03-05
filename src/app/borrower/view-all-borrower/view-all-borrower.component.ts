import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-all-borrower',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './view-all-borrower.component.html',
  styleUrl: './view-all-borrower.component.css'
})
export class ViewAllBorrowerComponent implements OnInit {
  private http;
  public borowerList: any = {};
  public SelectBorower :any;
  constructor(private httpCliant: HttpClient) {
    this.http = httpCliant;
  }
  ngOnInit(): void {
    this.loadBorrower();
  }

  loadBorrower() {
    this.http.get('http://localhost:8080/borrower/get').subscribe((data) => {
      this.borowerList = data
      console.log(this.borowerList);
    });
  }
 

  deleteBorrower(){
    let api = 'http://localhost:8080/borrower/' + this.SelectBorower.id;
    console.log(this.SelectBorower.id);
    this.http.delete(api,{responseType:'text'}).subscribe((responce :string) =>{
      console.log(responce);
      this.loadBorrower(); // Reload data after deletion
      this.SelectBorower=null;
    });
  }
  
  
  setSelectBorower(borower:any){
    this.SelectBorower=borower;
    console.log("setSelectedBorrower"+borower.id)
    
  }
}
