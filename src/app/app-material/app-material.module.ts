import { NgModule } from '@angular/core';

import {      
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatDatepicker,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatRadioButton,MatTable,
  MatTableDataSource,
  MatTableModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';  

@NgModule({
  exports: [
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,         
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule,
    MatTableModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule   

    
   
  ]
})
export class AppMaterialModule {}
