import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: `<p>Aquí iría un empleado</p>`,
  styleUrls: ['./empleado.component.css']
  //styles: [`p{background-color: yellow}`]
})
export class EmpleadoComponent {

  nombre='Juan'
  apellido='Díaz'
  edad=10
  empresa='Facebook'



  // getEdad(){
  //   return this.edad
  // }

  habilitacionCuadro=false

  usuRegistrado=false

  textoDeRegistro="No hay nadie registrado"

  getRegistroUsuario(){
    this.usuRegistrado=false
  }

  setusuarioRegistrado(event:Event){
    // alert('El usuario se acaba de registrar')

    //this.textoDeRegistro="El usuario se acaba de registrar"

    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar"
    }else{
      this.textoDeRegistro="No hay nadie registrado"
    }






  }






}
