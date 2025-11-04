import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Todos } from './MyComponent/todos/todos';
import { About } from './MyComponent/about/about';


export const routes: Routes = [
    {path:'',component:Todos},
    {path:'about',component:About},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
    })
    export class AppRoutingModule { }
