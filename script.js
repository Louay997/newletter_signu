const SubmitButton=document.querySelector('button');
const Input=document.querySelector('input');
const error=document.querySelector('.error');
SubmitButton.addEventListener('click',()=>{
    if(Input.value==""|| !Input.value.includes("@")||!Input.value.includes(".")||Input.value==null){
        error.style.opacity="1";
        Input.style.backgroundColor="hsla(0, 100.00%, 80.40%, 0.43)";
        Input.style.border="solid  hsl(4, 100%, 67%)";
        Input.value="";
        Input.placeholder="ash#lorem@company.com";
        Input.classList.add('input-error');
    }
        else {
            // Clear the existing content
            document.body.innerHTML = '';
    
            // Create the confirmation elements
            const container = document.createElement('div');
            container.classList.add('container2');
    
            const img = document.createElement('img');
            img.src = 'images/icon-success.svg';
            img.classList.add('confirmation_image');
    
            const h1 = document.createElement('h1');
            h1.textContent = 'Thanks for subscribing!';
            h1.classList.add('confirmation_header');
    
            const p = document.createElement('p');
            const span = document.createElement('span');
            span.textContent = Input.value;
            span.classList.add('selected_email');
            p.innerHTML = 'A confirmation email has been sent to ';
            p.appendChild(span);
            p.innerHTML += '. Please open it and click the button inside to confirm your subscription.';
            p.classList.add('confirmation_message');
    
            const button = document.createElement('button');
            button.textContent = 'Dismiss message';
            button.classList.add('dismiss_button');
    
            // Append the elements to the container
            container.appendChild(img);
            container.appendChild(h1);
            container.appendChild(p);
            container.appendChild(button);
    
            // Append the container to the body
            document.body.appendChild(container);
        }
})