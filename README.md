# Angular-all
you can learn all angular topic



adding git

1st install git

C:\Program Files\Git\bin

C:\Program Files\Git\cmd



## Create a new component in angular

ng g c test 

g for generate, c for component and component name.


// Interpolation - 5 

only you can edit two files
1) test.component.ts
2) app.component.ts

 

    // <h2>{{2+2}}</h2>
    // <h2>{{"Welcome" + name}}</h2>
    // <h2>{{name.length}}</h2>
    // <h2>{{name.toUpperCase()}}</h2>

    // <h2>{{greetUser()}}</h2>
	//<h2>{{siteUrl}}</h2>

//Property-Binding - 6 

    <input type="text" value="Vijaykumar">

Run Project

go to console and type >$0.getAttribute('value')
		       "Vijaykumar"
			
			>$0.value
			"Vijaykumar"

in window you can change the name= vijaykumar to codevolution
 
in console >$0.getAttribute('value')
           >"vijaykumar"
		
		>$0.value
		"Codevolution"


## Attribute VS Property

Attributes and Properties are not the same

 Attributes- HTML
 Properties - DOM(Document object Model)

Attributes initialize DOM properties and then they are done. attribute values cannot change once they are initialized.

Property values however can change.


<input [id]="myId" type="text" value="Vijaykumar">

//it is only work string:-
    <input id="{{myId}}" type="text" value="Vijaykumar">
   <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Vijaykumar">

//Class binding - 7
    <h2 class="text-success">Codevolution</h2>
    <h2 [class]="successClass">Codevolution</h2>


//but it is not a italic
    <h2 class="text-special" [class]="successClass">Codevolution</h2>


//Style- Binding - 8
  // <h2 [style.color]="'orange'">Style Binding</h2>

  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>


Multiple Styles 

<h2 [ngStyle]="titleStyles">Style Binding 3</h2>

public titleStyles ={
  color:"blue",
  fontStyle: "italic"
}

//Event Binding - 9
<button (click)="onClick()">Greet</button>
<button (click)="greeting='welcome vijaykumar'">Greet</button>
{{greeting}}

onClick(){
    // onClick(event){
    // alert("welcome to codevolution")
    console.log("welcome to codevolution")
    // console.log(event);
    this.greeting = "welcome to itwinetech";
    // this.greeting = event.type;
  }
