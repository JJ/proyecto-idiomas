/* Clase principal que contiene el vocabulario, las frases típicas y datos curiosos sobre el idioma */

const NoString = require("./excepciones/NoString");
const NoEncontrada = require("../src/excepciones/NoEncontrada.js");
const NoOrden = require("../src/excepciones/NoOrden.js");
const NoFormato = require("../src/excepciones/NoFormato.js");
const Traduccion = require("../src/traduccion.js");

class Idioma{

      constructor(idiomaBase, idiomaTraducir, palabra, significado){
        idiomaBase = "Español";
        idiomaTraducir = "Francés";
        var palabra = new Traduccion(palabra, significado);
        this.listado = new Array();
        this.expresiones = new Array();
      }

      //FUNCIÓN PARA COMPROBAR QUE UNA CADENA ES UN STRING
      comprobarString(cadena){
        const numeros = /^[0-9]*$/;
        const cadenaNum = numeros.test(cadena);
        if(cadenaNum == true){
          throw new NoString('La palabra debe ser de tipo "string"');
        }else{
          return cadenaNum;
        }
      }

      //LA CADENA DEBE ACABAR EN PUNTO FINAL
      comprobarFormato(cadena){
        var puntoFinal = cadena.endsWith('.');
        if(puntoFinal == false){
          throw new NoFormato('El formato introducido no es válido, debe poner punto final.');
        }else{
          return true;
        }
      }

      //FUNCIÓN PARA AÑADIR UNA PALABRA AL VOCABULARIO
      aniadirVocab(palabra, significado){
        var palabraNoString = this.comprobarString(palabra);
        var significadoNoString = this.comprobarString(significado);
        var formatoValidoP = this.comprobarFormato(palabra);
        var formatoValidoS = this.comprobarFormato(significado);
        if( palabraNoString == false && significadoNoString == false && formatoValidoP == true && formatoValidoS == true){
            var palabraNueva = new Traduccion(palabra.toUpperCase(), significado.toUpperCase());
            this.listado.push(palabraNueva);

        }

      }

      //FUNCIÓN PARA MOSTRAR TODAS LAS PALABRAS DEL VOCABULARIO
      mostrarVocab(){
        var mostrar = new Array();
          for(var i in this.listado){
            mostrar.push(this.listado[i].getTraduccion() + "\n");
           }
        return mostrar;
      }

      //FUNCIÓN PARA MOSTRAR UNA PALABRA CONCRETA
      mostrarPalabra(palabra){
        var encontrada = 0;
        var palabraEncontrada;
        var indice;
        var noString = this.comprobarString(palabra);
        var formatoValidoP = this.comprobarFormato(palabra);
        if(noString == false && formatoValidoP == true){
          for(var i in this.listado){
            if(palabra.toUpperCase() == this.listado[i].getPalabra()){
              encontrada++;
              indice = i;
            }
          }
        }

        if(encontrada > 0){
          palabraEncontrada = this.listado[indice].getTraduccion()+ " \n";
        }else{
          throw new NoEncontrada("La palabra que busca no se ha encontrado");
        }

        return palabraEncontrada;
      }

    
}

module.exports = Idioma;
