import {ModuleWithProviders, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ModuleConfig} from "./module-config";

/**
 * file di inizializzazione del modulo. Fa la funzione di app module in un progetto angular.
 */
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // ExampleComponent
  ],
  exports: [
    // ExampleComponent
  ]
})
export class EntitiesModule {
  /** Un modulo, per convenzione, si inizializza tramite un metodo statico chiamato forRoot.
   * Al metodo forRoot è possibile passare dei parametri.
   * @param config parametro di configurazione del modulo
   * @returns il modulo inizializzato
   */
  public static forRoot(config: ModuleConfig): ModuleWithProviders {
    return {
      ngModule: EntitiesModule,
      /**
       * si definiscono i service del modulo
       */
      providers: []
    };
  }
}
