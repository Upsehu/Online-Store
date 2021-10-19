async function getData(url){

    let res = await fetch(url);

    let data = await res.json();

    console.log(data);

    return data;
}


function append(data, container){

    data.forEach( ({title, image, }) => {

        let div = document.createElement('div');
        // div.style.height = '250px';

        let p = document.createElement('p');
        p.innerHTML = title;

        let img = document.createElement('img');
        img.src = image;
        img.style.width = '100%'

        div.append(img, p);

        container.append(div);

    });


}

export {getData, append} 