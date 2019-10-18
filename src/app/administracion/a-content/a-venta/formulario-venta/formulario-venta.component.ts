import { Component, OnInit } from '@angular/core';
import { Cementerio } from 'src/app/Entidades/Cementerio';
import { BackendServiceService } from 'src/app/Service/backend-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoTumba } from 'src/app/Entidades/TipoTumba';
import { Tumba } from 'src/app/Entidades/Tumba';
import { Patio } from 'src/app/Entidades/Patio';
import Swal from 'sweetalert2';
import { Funcionario } from 'src/app/Entidades/Funcionario';


@Component({
  selector: 'app-formulario-venta',
  templateUrl: './formulario-venta.component.html',
  styleUrls: ['./formulario-venta.component.css']
})
export class FormularioVentaComponent implements OnInit {
  cementerioList:Cementerio[] = [];
  tipoTumbaList:TipoTumba[] = [];
  tumbaList: Tumba[] = [];
  patioList: Patio[] =[];
  funcionarioList: Funcionario[] =[];


  formTumba: FormGroup;

  constructor(private service: BackendServiceService, private formBuilder: FormBuilder,
    private router:Router) { 
      this.formTumba = this.formBuilder.group({
        rut_Funcionario: ['', [Validators.required]] ,        
        numero_Tumba: ['', [Validators.required]] ,        
        valor_Tumba: ['', [Validators.required]] ,        
        orientacion_Tumba: ['', [Validators.required]] ,        
        largo: ['', [Validators.required]] ,        
        ancho: ['', [Validators.required]] ,
        funcionario:['', [Validators.required]],
        patio:['', [Validators.required]],
        tipo_Tumba:['', [Validators.required]] 
        //cliente....  
    }); 
  }

  ngOnInit() {
    //this.service.getCementerio().subscribe(cementerioList1 => this.cementerioList = cementerioList1);
    this.service.getTipoTumba().subscribe(tipoTumbaList => this.tipoTumbaList = tipoTumbaList);
    this.service.getFuncionarios().subscribe(func => this.funcionarioList = func);

    //this.service.getTumba().subscribe(tumbaList1 => this.tumbaList = tumbaList1);
    this.service.getPatio().subscribe(patioList1 => this.patioList = patioList1);


  }

  public createVenta():void{    
    this.service.saveTumba(this.formTumba.value).subscribe(
    tumba => {   
      
     Swal.fire('Guardado', ` con Exito`, 'success');    
     this.router.navigate(['/administracion-inicio/']);  
    },
    err=>{
    console.log(err)
    }
  );  
  }
}