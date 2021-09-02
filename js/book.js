//search input part
const searchInput=document.getElementById ('search-input');const divBox=document.getElementById('div-box');
const errorMessge=document.getElementById('error-messge');
//arrow function part 
const searchButton=()=>{
    const searchText=searchInput.value;
    searchInput.value = "";
    if(searchText==0){
        errorMessge.innerText='search field cannot be empty ';
        return;
    }
    else{
         const url = ` http://openlibrary.org/search.json?q=${searchText}`;
         fetch(url)
             .then(res => res.json())
             .then(data => displayShow(data.docs));
    }
   
    
}
//display show part all books
const displayShow=books=>{
    divBox.innerHTML = "";
    if(books.message =="Not Found"){
       errorMessge.innerText="No Result Found"; 
    }
    else{
        errorMessge.innerText="";
    }
    console.log(books)
    //forEach use of array part
    books.forEach(book =>{
        console.log(book);
        const div=document.createElement('div');
        
        div.classList.add('col');
        const url = ` https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        // console.log(url)
        //all dynamic html part
        div.innerHTML = `
            <div class="card">
                        <img height=200 src = "${url}"
                        class = "card-img-top"
                        alt = "...">
                <div class="card-body">
                    <h5 class="card-title">${book.text[1]}</h5>
                        <p class="card-text">Author by:${book.author_name[0]}</p>
                        <p class = "card-text">First-Publish:${book.first_publish_year} </p>
                        <p class = "card-text">Publish-Date:${book.publish_date[0]} </p>
                </div>
            </div>`;
            
            divBox.appendChild(div);

    })
}