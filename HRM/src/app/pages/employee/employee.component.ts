import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {

EmployeeName:string;
EmployeeID: string;
Branch: string;
Department: string;
Designation: string;
Dateofjoining: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
{EmployeeName: 'Sonia Sammy',EmployeeID: 'EMP0034567',Branch:'Andheri',Department:'Finance' ,Designation:'Manager',Dateofjoining:'23.05.2020'},
{EmployeeName: 'Mina Mathur	',EmployeeID: 'EMP003223',Branch:'Mulund',Department:'Marketing' ,Designation:'Executive',Dateofjoining:'10.01.2024'},
{EmployeeName: 'Shankar V',EmployeeID: 'EMP0036789',Branch:'Andheri',Department:'HR' ,Designation:'Intern',Dateofjoining:'06.03.2024'},
{EmployeeName: 'Venkat Shree',EmployeeID: 'EMP0031156',Branch:'Andheri',Department:'HR' ,Designation: 'Manager',Dateofjoining:'11.10.2019'},
{EmployeeName: 'Anil Malhotra',EmployeeID: 'EMP0037890',Branch:'Mulund',Department:'Sales' ,Designation:'Assistant Manager',Dateofjoining:'22.10.2022'},
{EmployeeName: 'Richa Mishra',EmployeeID: 'EMP0036545',Branch:'Chembur',Department:'Marketing' ,Designation:'Lead',Dateofjoining:'22.10.2022'},
{EmployeeName: 'Tanu Meena',EmployeeID: 'EMP0035432',Branch:'Chembur',Department:'Communication' ,Designation:'Manager',Dateofjoining:'23.05.2020'},
{EmployeeName: 'Ajay Fernandes',EmployeeID: 'EMP0031022',Branch:'Bandra',Department:'Development' ,Designation:'Manager',Dateofjoining:'23.05.2020'},
];

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatTableModule, MatSortModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements AfterViewInit {
  displayedColumns: string[] = ['EmployeeName','EmployeeID','Branch','Department','Designation','Dateofjoining','Action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


}
