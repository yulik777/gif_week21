function onSearch() {
    let gif = document.getElementById("gif").value;
    console.log(gif);

    fetch('https://api.giphy.com/v1/gifs/search?api_key=Qvf9S52TwRjgZhRgCtYHB9Xm1bMAjTj4&q=' + gif +
            '&limit=5&offset=0&rating=g&lang=e')
        .then(response => response.json())
        .then(gif => {
            console.log(gif);
        if (gif.data.length == 0) {
                        alert(`Введенная фраза не найдена`);
                    } else {
            gif.data.forEach(element => {
                console.log(element);
                const box = document.createElement("img");
                box.classList.add('box');
                box.src = element.images.original.url;
                pictures.append(box);
            });
          }
        })

        .catch(error => console.log(error));
}
