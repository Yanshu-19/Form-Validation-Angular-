import { Routes } from '@angular/router';
import {HomeComponent} from  './home/home.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
        path: 'app-home',
        component: HomeComponent,
    },
    {
        path: 'app-form',
        component: FormComponent,
    },

];
