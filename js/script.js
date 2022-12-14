const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Te Qift Nusja",
            "image": "https://unsplash.com/photos/S_YOuAUMm2o"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "E kam fillu nga 0 dhe tani bera Miliona",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Mercedes Benz_Al",
            "image": "https://unsplash.com/photos/xZIJqYNIOfc"
        },
        "likes": 800,
        "created": "2021-05-15"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.com/photos/ELaOukUlgeY",
        "author": {
            "name": "Zhelgyre Mistri",
            "image": null
        },
        "likes": 25,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Sikur te kishte halla koqe behesh xhaxha Elvis Doda Oi OI oi. Dum DUm dummy",
        "media": "https://unsplash.com/photos/IXV_wQLoqbc",
        "author": {
            "name": "Aqif Kopertoni",
            "image": "https://unsplash.com/photos/ud0twV98uvg"
        },
        "likes": 600,
        "created": "2021-03-05"
    }
];

const container = document.getElementById('container')

for (let i = 0; i < posts.length; i++) {
    container.innerHTML += 
    `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${posts[i].author.name}</div>
                <div class="post-meta__time">${posts[i].created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${posts[i].content}</div>
    <div class="post__image">
        <img src="${posts[i].media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
            </div>
        </div> 
    </div>            
    </div>

    `
}

const likesButton = document.querySelectorAll("a.like-button")
const likesCounter = document.getElementById('like-counter-1')

