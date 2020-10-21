import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {CustomDesign} from '../../models/custom-design';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ToggleInformationComponent} from '../../components/toggle-information/toggle-information.component';

@Component({
  selector: 'app-design-custom-view',
  templateUrl: './design-custom-view.component.html',
  styleUrls: ['./design-custom-view.component.css']
})
export class DesignCustomViewComponent implements OnInit {
  arrayCustomDesigns:CustomDesign[];
  constructor(private database:DatabaseService,public dialog: MatDialog) { this.ActualizarDatosCustomDesigns() }

  ngOnInit(): void {
  }

  ActualizarDatosCustomDesigns()
  {
    this.database.GetCustomDesigns().subscribe((res:any)=>
    {
      this.arrayCustomDesigns=res.results.map(item=>{


        //Se asigna los campos necesarios que viene del json a una variable de tipo Custom Design 
       // para asignarlos localmente 
       var _customD:CustomDesign={id_customDesign:0, designName:'',description:'',nombreArchivo:'',base64textString:'',type:''};
       _customD.id_customDesign=item.id_custom_design;
       _customD.description=item.description;
       _customD.base64textString=item.url_img;
       _customD.designName=item.name;
       _customD.nombreArchivo='';
       _customD.type='';
       return _customD;
      });
      console.log(this.arrayCustomDesigns);
    }
    );
  }

  openDialog(_customDesign:CustomDesign) {
    this.dialog.open(ToggleInformationComponent, {
      data:_customDesign
    });
  }
}


