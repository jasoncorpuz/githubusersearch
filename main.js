console.log('js is working')
// fetch https://api.github.com/users/jasoncorpuz/repos
// handle search button, pass values to 
// url generator, pass values to
// fetch, handles getting data to JSON, response.ok, then run code with search
//renders results 
const url= 'https://api.github.com/users/'

function handleSearch(){
    console.log('handle search working')
    $('form').submit(function(event) {
        event.preventDefault();
        const search=$('.search').val();
        console.log(search);
        generateLink(search);
    })
    
}

function generateLink(search){
    console.log('gen link working')
    console.log(`generate link: ${search}`)
    let searchUrl = `${url}${search}/repos`;
    console.log(searchUrl);
    getInfo(searchUrl);
}

function getInfo(searchUrl){
    console.log(`${searchUrl} passed off`);
    fetch(searchUrl)
        .then(response => {
            if (response.ok) {
                return response.json()
            } 
        throw new Error(response.statusText);
        })
}

function renderInfo(){
    console.log('renderInfo working')
}






function callApp(){
    handleSearch();
}

$(callApp);