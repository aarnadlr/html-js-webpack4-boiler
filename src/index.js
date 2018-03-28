console.log(`This is the Webpack4 entry point.`);



var rootDiv = document.getElementById('root');
var greeting = 'Hello there,'

rootDiv.style.color = "red";



//TEMPLATE LITERAL CODE
rootDiv.innerHTML = `

<div style="font-size:19px;margin-top:50px; background: cyan; display:inline-block;">
  ${greeting} I'm added via a template literal.
</div>

`;