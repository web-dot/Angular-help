import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


let STUDENTS: Student[] = [

  {name: "sudip", roll: "01" },
  {name: "arun", roll: "02" },
  {name: "sunil", roll: "03" }

]




@Component({
  selector: 'app-landingpage-navbar',
  templateUrl: './landingpage-navbar.component.html',
  styleUrls: ['./landingpage-navbar.component.css']
})
export class LandingpageNavbarComponent implements OnInit {

  students = STUDENTS;
  selectedStudent?: Student;

  constructor(public dialog: MatDialog) { }



  ngOnInit(): void {
  }

  openDialog(){
    this.dialog.open(DialogComponent).afterClosed().subscribe(confirm => {
      if(confirm){
        console.log("confirmed in dialog");
      }
    })
  }

  onSelect(student: Student){
    this.selectedStudent = student;
  }

}

export interface Student{
  name: string;
  roll: string;
}
