import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import Swal from "sweetalert2"
import Swal from 'sweetalert2';
import { NavComponent } from '../../common/nav/nav.component';


@Component({
  selector: 'app-view-all-borrower',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,NavComponent],
  templateUrl: './view-all-borrower.component.html',
  styleUrls: ['./view-all-borrower.component.css']
})
export class ViewAllBorrowerComponent implements OnInit {
  private http;
  public borowerList: any = [];
  public SelectBorower :any;
  public userName:String="";
  public user:any;
  private baseURL:String ="http://localhost:8081";
  
  public selectedUser:any={
    "id":null,
    "firstName":null,
    "lastName":null,
    "userName":null,
    "email":null,
    "address":null,
    "address2":null,
    "country":null,
    "phoneNumber":null
  }
  public borrowerBook:any={
    userId:"",
    bookid:"",
    date:new Date(),
    fine:"",
    qty:"",

  }
  constructor(private httpCliant: HttpClient) {
    this.http = httpCliant;
  }
  ngOnInit(): void {
    this.loadBorrower();
  }

  loadBorrower() {
    this.http.get(this.baseURL+'/user/get-all-users').subscribe((data) => {
      this.borowerList = data
      console.log(this.borowerList);
    });
}
 

  deleteBorrower(){
    this.http.delete(this.baseURL+'/user/delete/'+this.selectedUser.id).subscribe((res) => {
      console.log("123");
      console.log(res);
      this.loadBorrower();
      Swal.fire({
        title:"Deleted",
        text:`You deleted${this.selectedUser.userName} success`,
        icon:"success"
      })
    });
  }
  
  setSelectBorower(borower:any){
    this.selectedUser=borower;
    console.log("setSelectedBorrower"+borower.firstName)

  }
  updateBorrower(){
    this.http.post(this.baseURL+"/user/add-user",this.selectedUser).subscribe((res:any)=>{
      console.log(res)
      this.loadBorrower();
      Swal.fire({
        title:"updated !",
        text:`You Updated ${this.selectedUser.userName}`,
        icon:"success"
      })
    })
 
  }
  serarchUser(){
    console.log(this.userName);
    this.http.get(`http://localhost:8081/user/find-by-user-name/${this.userName}`).subscribe(data=>{
      console.log(data)
      this.user=data;
    })

  }
}
