/*const person={
    'first name':'Shivani',
    name:'Shinde',
    age:24,
    hobbies:['Sports','Cooking'],
    greet:function(){
        alert('Hello everyone')
    },
    1.5:'hello'
}

person.greet()

delete person.age

console.log(person['first name'])
console.log(person[1.5])*/
const addMovieBtn = document.getElementById('add-movie-btn')
const searchMovieBtn = document.getElementById('search-btn')


const movies = []

const renderMovie = (filter = '') => {
    const movieList = document.getElementById('movie-list')

    if (movies.length === 0) {
        movieList.classList.remove('visible')
        return
    }
    else {
        movieList.classList.add('visible')
    }

    movieList.innerHTML = ''

    const filteredMovie = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))

    filteredMovie.forEach((movie) => {
        const movieEl = document.createElement('li')
        let text = movie.info.title + '-'
        for (const key in movie.info) {
            if (key !== 'title') {
                //console.log(key)
                text = text +`${key}: ${movie.info[key]}`
            }
        }
        movieEl.textContent = text
        movieList.append(movieEl)
    })
}

const addMovieFun = () => {
    const title = document.getElementById('title').value
    const extraname = document.getElementById('extra-name').value
    const extravalue = document.getElementById('extra-value').value
    if (title.trim() === '' || extraname.trim() === '' || extravalue.trim() === '') {
        alert('Please enter valid inputs')
        return
    }
    const newMovie = {
        info: {
            title,
            [extraname]: extravalue
        },
        id: Math.random().toString()
    }
    movies.push(newMovie)
    // clearInputs()
    renderMovie()

}

/*const clearInputs=()=>{
 title.value=''
 extravalue.value=''
 extraname.value=''
}*/

const searchMovieFun = () => {
    const filterTerm = document.getElementById('filter-title').value
    renderMovie(filterTerm)
}


addMovieBtn.addEventListener('click', addMovieFun)
searchMovieBtn.addEventListener('click', searchMovieFun)

















