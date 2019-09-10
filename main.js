console.log('js is working')
// fetch https://api.github.com/users/jasoncorpuz/repos
// handle search button, pass values to 
// url generator, pass values to
// fetch, handles getting data to JSON, response.ok, then run code with search
//renders results 
const url= 'https://api.github.com/users/'
const key= 'e8dae55d9e83ffcacc7e2e896333ef66b0c773db'
const options = {
    headers: new Headers({
        'Authorzation' : key
    })
};

function handleSearch(){
    console.log('handle search working')
    $('form').submit(function(event) {
        event.preventDefault();
        const search=$('.search').val();
        console.log(search);
        generateLink(search);
    }) 
};



function generateLink(search){
    console.log('gen link working')
    console.log(`generate link: ${search}`)
    const searchUrl =`${url}${search}/repos`;
    console.log(searchUrl);
    getInfo(searchUrl);
};

function getInfo(searchUrl){
    //console.log(`${searchUrl} passed off`);
    fetch(searchUrl)
        .then(response => response.json())
        .then(console.log(responseJson))
};

function renderInfo(){
    console.log('renderInfo working')
};






function callApp(){
    handleSearch();
}

$(callApp);