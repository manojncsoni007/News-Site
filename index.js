console.log('Connected');
//Api Source
const apiKey = '76575b581d28625f658f4edd20fbe8a6';
const country = 'in';
const source = 'bbc-news';


let newsContainer = document.querySelector('#newsContainer');


//Create get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?token=${apiKey}&lang=en`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let htmlNews = '';
        articles.forEach(element => {

            let newsCard = `<div class='col'>
                                <div class="card h-100" style="width: 18rem;">
                                 <img src="${element['image']}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <h5 class="card-title">${element['title']}</h5>
                                    <p class="card-text">${element['content']}</p>
                                    <a href="${element['url']}" target='_blank' class="btn btn-primary">Read more Here</a>
                                    </div>
                                    <div class="card-footer">
                                      <small class="text-muted">Published: ${element.publishedAt}</small>
                                    </div>
                                </div> 
                            </div>`;
            htmlNews += newsCard;

        });
        newsContainer.innerHTML = htmlNews;
    } else {
        console.log('some error accured');
    }
}
xhr.send();

    // Html element stle for news container



