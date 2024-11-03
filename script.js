document.getElementById('contactFrom').addEventListener('submit',(event)=>{
    event.preventDefault();

    const name=document.getElementById('name').value;

    document.getElementById('status').textContent='Message sent sucessfully! Thank you, '+name+'.';
    document.getElementById('contactFrom').reset();
})