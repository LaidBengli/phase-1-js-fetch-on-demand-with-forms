const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
        console.log(input.value);
        fetch("http://localhost:3000/movies/" + input.value)
            .then((response) => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error("Please Enter a valid Number");
                }
            })
            .then((data) => {
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerText = data.title;
                summary.innerText = data.summary;
            }).catch((error) => {
                alert(error)
            });
    })

}

document.addEventListener('DOMContentLoaded', init);