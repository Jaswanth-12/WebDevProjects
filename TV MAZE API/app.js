const form = document.querySelector('#form');
const query = document.querySelector('#input');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query.value}`);
    query.value = '';
    console.log(res.data);
    fun(res.data);
})
function fun(shows) {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.setAttribute('src', result.show.image.medium);
            document.body.append(img);
        }
    }
}