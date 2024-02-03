const getTitle = document.getElementById('title'); 
const getDescription = document.getElementById('Description'); 
const erMsg = document.getElementById('errorMsg');
const enterBtn = document.getElementById('saveBtn');
const DisplayData = document.getElementById('displayData');
const clearBtn = document.getElementById('clearBtn');

const clearInput = (e) => {
    e.preventDefault();
    
    getTitle.value = '';
    getDescription.value = '';
}

const deleteData = (e) => {
    
    if(e.target.tagName === 'I' && e.target.classList.contains('fa-trash'))
    {   
        const getListItem = e.target.parentElement.nextElementSibling;
        if(getListItem)
        {
            getListItem.remove();
            e.target.parentElement.remove()
        }
    }
    else if(e.target.tagName === 'I' && e.target.classList.contains('fa-pen-to-square'))
    {
        getTitle.value = e.target.parentElement.textContent;
        getDescription.value = e.target.parentElement.nextElementSibling.textContent;
    }
}

const addData = (e) => {

    e.preventDefault();

    if(getTitle.value==='' || getDescription.value==='')
    erMsg.innerText = 'Field cannot be empty';
    else{
        let h3 = document.createElement('h3');
        h3.innerHTML = getTitle.value + '<i class="fa-solid fa-trash icons" id="dlt-icon" ></i><i class="fa-solid fa-pen-to-square icons" id="edit-icon"></i>'
        let li = document.createElement('li');
        li.innerHTML =  getDescription.value;
        DisplayData.appendChild(h3);
        DisplayData.appendChild(li);

        clearInput();
    }

    console.log('working')
}

enterBtn.addEventListener('click',addData)
DisplayData.addEventListener('click',deleteData);
clearBtn.addEventListener('click',clearInput);