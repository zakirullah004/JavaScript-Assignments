const form = document.querySelector('form');
const input = document.querySelector('#inputFeild');
const submitBtn = document.querySelector('#submitBtn');
const ul = document.querySelector('ul');
let editli = null;

form.addEventListener('submit', function (e) {

    e.preventDefault();

    let inputValue = input.value.trim();
    if (inputValue === "") {
        e.preventDefault();
        return;
    }

    if (submitBtn.value === "Edit") {
        editli.firstChild.textContent = inputValue;
        submitBtn.value = "Add";
        input.value = "";
        submitBtn.setAttribute('id', 'submitBtn');
        input.setAttribute('id', 'inputFeild')
    }
    else {

        let li = document.createElement('li');
        let p = document.createElement('p');
        let div = document.createElement('div');
        let editIcon = document.createElement('i');
        let delIcon = document.createElement('i');
        let chekbocx = document.createElement('label');

        div.classList.add('icons');
        editIcon.classList.add("fa-solid", "fa-pen-to-square", "edit-icon");
        delIcon.classList.add("fa-solid", "fa-trash", "dlt-icon");
        chekbocx.classList.add("my-checkbox");

        p.innerText = input.value;
        li.appendChild(chekbocx);
        li.appendChild(p);
        li.appendChild(div);
        div.appendChild(editIcon);
        div.appendChild(delIcon);
        ul.appendChild(li);


        input.value = "";


        // Delete Element 
        delIcon.addEventListener('click', function () {
            let firstParent = this.parentElement;
            let pofParent = firstParent.parentElement;
            pofParent.remove()
        });

        // Edit Element 
        editIcon.addEventListener('click', function (e) {

            input.focus();
            input.value = this.parentElement.previousElementSibling.innerText;
            editli = this.parentElement.previousElementSibling;
            submitBtn.value = "Edit";
            submitBtn.setAttribute('id', 'editbtn');
            input.setAttribute('id', 'highlight');

        });


        li.addEventListener('click', function (e) {

            if (e.target.tagName === "P") {
                e.target.classList.toggle('completed')
                e.target.previousElementSibling.classList.toggle('checked');
                e.target.parentElement.classList.toggle('clicked');

                if (e.target.className === "completed") {
                    if (e.target.nextElementSibling.firstChild.classList[2] === "edit-icon") {
                        e.target.nextElementSibling.firstChild.classList.toggle('hidden');
                    }
                } else {
                    e.target.nextElementSibling.firstChild.classList.remove('hidden');
                }
            }

            if (e.target.tagName === "LABEL") {
                e.target.classList.toggle('checked');
                e.target.nextElementSibling.classList.toggle('completed');
                e.target.parentElement.classList.toggle('clicked');
            }

        });
    };

    const searchInput = document.querySelector('#search');
    const allLi = document.querySelectorAll('li');

    searchInput.addEventListener('input', (e) => {
        const searchData = searchInput.value.toLowerCase();
        ul.innerHTML = "";
        allLi.forEach((li) => {
            const pinLI = li.querySelectorAll('p') 
            if (pinLI[0].innerText.toLowerCase().indexOf(searchData) > -1) {
                ul.appendChild(li);
            }
        });
        if (ul.innerHTML === "") {
            ul.innerHTML = "<h2>Result not found</h2>"
        }
    });

});







