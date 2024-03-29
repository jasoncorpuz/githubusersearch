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

function reset(){
    $('.results').html('')
}

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
        .then(responseJson => renderInfo(responseJson))
};

function renderInfo(responseJson){
    // repo name and url
    console.log(responseJson)
    console.log(responseJson[0].html_url)
    console.log(responseJson[0].name)
    console.log(responseJson.length)
    $('ul').empty();
    for (let i = 0; i < responseJson.length; i++){
        $('ul').append(
            `<li>${responseJson[i].name}</li> 
            <li>${responseJson[i].html_url}</li>`
        )
    }

};






function callApp(){
    handleSearch();
}

$(callApp);