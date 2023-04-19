import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';





@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements AfterViewInit {

  listUsuarios: Usuario[] = [
    {usuario: 'rpolar', nombre: 'admin', apellido: 'admin', sexo: 'Masculino'},
    {usuario: 'jperes', nombre: 'Jose', apellido: 'Perez', sexo: 'Masculino'},
    {usuario: 'aramirez', nombre: 'Ana', apellido: 'Ramirez', sexo: 'Femenino'},
    {usuario: 'ewatson', nombre: 'Emma', apellido: 'Watson', sexo: 'Femenino'},
  ];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  //dataSource = listUsuarios;
  dataSource = new MatTableDataSource(this.listUsuarios);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
