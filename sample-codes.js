let element = document.querySelector('div'); // Selects the first div
element.style.color = 'red' ; 

let p_element = document.querySelectorAll('p'); //selects all p tags
for(var p of p_element){
    p.style.color = 'blue';
}

var p_new = document.createElement('p'); // creates a p element
console.log(p_new);

p_new.textContent = "paragragh five"; // adds a textContent inside p tag
element = document.querySelector('div'); // selects the first div
element.appendChild(p_new); // appends this as the last child in div

let strong = document.createElement('strong');
strong.textContent = 'Strong';
element.appendChild(strong);
element.replaceChild(strong,p_new); // replaces the elements 
element.removeChild(strong); // removes the first occurence of strong
