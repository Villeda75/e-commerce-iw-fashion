import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
//modulo para imagen
import { FileHolder } from 'angular2-image-upload';
import { CustomDesign } from 'src/app/models/custom-design';
import {DatabaseService} from '../../services/database.service';
import { AlertasService } from '../../alertas.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]

})
export class FormProductComponent implements OnInit {
  productoActual:any={};
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  designActual: CustomDesign = { id_customDesign: 0, designName: '', description: '', nombreArchivo: '', base64textString: '', type: '' };
  
  colores: any[] = [];
  subcategories: any[] = [];
  sizes: any[] = [];
  genders: any[] = [];
  brands: any[] = [];

    idColor:number=0;
    isVisible:boolean=false;
    idSubCategorie:number=0;
    idSize:number=0;
    idGender:number=0;
    idBrand:number=0;
  
  constructor(private _formBuilder: FormBuilder,
    private database:DatabaseService,
     private alerta: AlertasService,
     private activatedRoute: ActivatedRoute) {  
       const params = this.activatedRoute.snapshot.params;
      if (params.id) {

      this.database.GetProductById(params.id).subscribe((res:any)=>
          {
            this.productoActual=res.results[0];
            console.log(this.productoActual);
            this.LoadData(params.id);
          });
      }
      else {
        //alert('no encontrado');
        this.alerta.showErrorAlert('Producto no encontrado');
      }}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      product_type: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      discount_price:[0, Validators.required],
      /*id_color:['', Validators.required],*/
      slug:['', Validators.required],

    });
    this.secondFormGroup = this._formBuilder.group({
      stock: ['', Validators.required],
  
    });
    this.database.GetBrands().subscribe((res:any)=>
      {
        this.brands=res.results;
      });
      this.database.GetSizes().subscribe((res:any)=>
      {
        this.sizes=res.results;
      });
      this.database.GetGenders().subscribe((res:any)=>
      {
        this.genders=res.results;
      });
      this.database.GetSubCategories().subscribe((res:any)=>
      {
        this.subcategories=res.results;
      });
      this.database.GetColors().subscribe((res:any)=>
      {
        this.colores=res.results;
      });

      this.SetInitialValuesSelect();
  }

LoadData(id:number)
{
  if(id>0)
  {
    //tipo producto
    this.firstFormGroup.controls['product_type'].setValue(this.productoActual.product_type);
    //
    this.firstFormGroup.controls['description'].setValue(this.productoActual.description);
    //
    this.firstFormGroup.controls['price'].setValue(this.productoActual.price);

    this.firstFormGroup.controls['discount_price'].setValue(this.productoActual.discount_price);

    this.firstFormGroup.controls['slug'].setValue(this.productoActual.slug);

    this.secondFormGroup.controls['stock'].setValue(this.productoActual.stock)

   
   //encuentra el id de la marca y lo asigna al default value del select
  
  }
  else
  {

  }

}

SetInitialValuesSelect()
{
  

  this.idBrand=this.brands.findIndex(x=>x.brand==this.productoActual.brand);

 
 this.idSubCategorie=this.subcategories.findIndex(x=>x.sub_category===this.productoActual.sub_category);

  this.idSize=this.sizes.findIndex(x=>x.size===this.productoActual.size);

  this.idGender=this.genders.findIndex(x=>x.gender===this.productoActual.gender);
  if(this.productoActual.visible==1)
  {
   this.isVisible==true;
  }
  else
  {
    this.isVisible==false;
  }

}

  subirImagen(imagen: FileHolder) {
    //event es un elemento de tipo fileholder que contiene la informacion de la imagen
    console.log();
    this.designActual.base64textString = imagen.src;
    this.designActual.nombreArchivo = imagen.file.name;
    this.designActual.type = imagen.file.type;
    var array: string[] = this.designActual.base64textString.split(',');
    this.designActual.base64textString = array[1];
    console.log(this.designActual.base64textString);
  }

  

  //Eliminar imagen
  onRemoved(file: FileHolder) {
    console.log(file);
    this.designActual.base64textString = '';
    this.designActual.nombreArchivo = '';
    this.designActual.type = '';
  }

  async EnviarProduct()
  {
 
 delete this.designActual.description;
 delete this.designActual.designName;
 delete this.designActual.id_customDesign;
 delete this.designActual.type;
 let isVisible:number;
if(this.isVisible)
{
isVisible=1;
}
else
{
  isVisible=2;
}

let thirdPart={"id_color":this.idColor,"visible":isVisible, "id_sub_category":this.idSubCategorie,"id_size":this.idSize,"id_gender":this.idGender,"id_brand":this.idBrand};

 let Producto=Object.assign(this.firstFormGroup.value,this.secondFormGroup.value);

 
 let Producto2=Object.assign(Producto,thirdPart);
 
 let FinalProducto=Object.assign(Producto2,this.designActual);

 
 await this.database.InsertProduct(FinalProducto).subscribe(res=>
  {
    if (res['resultado'] == 'success') {
      //alert(res['mensaje']);
      location.reload();
     
      this.alerta.showSuccessAlert(res['mensaje']);
      
    }
    else {
      this.alerta.showErrorAlert('Ocurrió un error');
    }
  });
  }

}
