import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AgregarComponent } from "./UTL/agregar/agregar.component";
import { AlumnosComponent } from "./UTL/alumnos/alumnos.component";

const routes: Routes=[
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'Agregar', component: AgregarComponent},
    {path:'verAlumno', component: AlumnosComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}