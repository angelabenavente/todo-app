# TodoApp 📋


https://user-images.githubusercontent.com/51118506/120065006-7a424b80-c06f-11eb-91db-da0a94fc8ee0.mp4


Este proyecto es una aplicación de tareas sencilla desarrollada con [Angular](https://angular.io/) y generada con [Angular CLI](https://angular.io/cli) para la charla "Bases para desarrollar mi primera App en Angular" de [CodeNoobs Conf 2021](https://codenoobsconf.com/).

## Para comenzar... 🚀

### Instalar Angular CLI
Ejecutar `npm install -g @angular/cli`.

### Crear un nuevo proyecto

Ejecutar `ng new nombre-del-proyecto`.

### Desplegar la aplicación

Ejecutar `ng serve` y navegar a `http://localhost:4200/`.

### Generar un nuevo componente

Ejecutar `ng generate component nombre-del-componente` o `ng g c nombre-del-componente`. También se puede ejecutar `ng generate directive|pipe|service|class|guard|interface|enum|module` para generar otros elementos.

## Empezando a codear ⚙️

### Importar el componente to-do en app.module.ts

```
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class AppModule { }
```

### Usar nuestro componente en angular.component.html

```
<app-to-do></app-to-do>
```


### Crear las propiedades "task" y "tasksList" en to-do.component.ts

```
  task: string;
  tasksList: string[] = [];
  
```

### Crear las funciones para añadir y borrar tareas en to-do.component.ts

```
  addTask(): void {
    this.tasksList.push(this.task);
  }
```
```
  removeTask(task: string): void {
    const taskIndex = this.tasksList.indexOf(task);
    this.tasksList.splice(taskIndex, 1);
  }
  
```
### Crear un [formulario driven-template](https://angular.io/docs) en nuestro componente to-do
- Importar FormsModule en app.module.ts
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
})
export class AppModule { }
```
-  Crear el formulario en to-do.component.html
```
<form #taskForm (ngSubmit)="addTask(); taskForm.reset()">
  <input type="text" placeholder="I have to..." name="task" [(ngModel)]="task">
  <button type="submit" [disabled]="!task">Añadir</button>
</form>
```

### Crear la lista de tareas en to-do.component.html usando la [directiva ngFor](https://angular.io/api/common/NgForOf) y la [interpolación](https://desarrolloweb.com/articulos/binding-interpolacion-angular.html)

```
<ul>
  <li *ngFor="let item of taskList">
    <p>{{ item }}</p>
  </li>
</ul>
  
```
### Añadir un botón para borrar cada tarea

```
<ul>
  <li *ngFor="let item of taskList">
    <p>{{ item }}</p>
    <button (click)="removeTask(item)">Borrar</button>
  </li>
</ul>
````

### Crear un párrafo que indique cuándo no hay tareas usando la [directiva ngIf](https://angular.io/api/common/NgIf).

```
<p *ngIf="!taskList.length">No tasks yet.</p>
```

### Crear un párrafo que indique cuántas tareas hay en total usando la interpolación, la directiva ngIf y el [operador Elvis](https://www.javatpoint.com/kotlin-elvis-operator)

```
<p *ngIf="tasksList.length">{{ tasksList.length }} pengind task{{ tasksList.length > 1 ? 's' : '' }}:</p>
```

### Maquetar y estilar al gusto usando el archivo to-do.component.html y to-do.component.css 🖌

## Materiales sobre Angular:
- [Documentación de Angular](https://angular.io/docs)
- [Angular CLI](https://angular.io/docs)
- [Como agregar un componente en un módulo](https://gustavodohara.com/blogangular/agregar-componente-una-pagina-modulo-angular/)
- [Curso Angular, de 0 a experto](https://www.udemy.com/course/angular-fernando-herrera/)
- [Curso Angular, de complete guide](https://www.udemy.com/course/the-complete-guide-to-angular-2/)
- [Presentación de introducción a Angular](https://www.canva.com/design/DAEfTbdX_28/ccb70NsnldEPsiubTRfz1A/view?utm_content=DAEfTbdX_28&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)
