//Formattare le date in formato italiano (gg/mm/aaaa)

function itFormatDate (usDate){
    let dayResult = usDate.substring(8, 10);
    let monthResult = usDate.substring(5, 7);
    let yearResult = usDate.substring(0, 4);
    let itDateResult = dayResult + "-" + monthResult + "-" + yearResult;
    return itDateResult;
}

const posts = [
    {
        "id": 0,
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
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": "https://unsplash.it/300/300?image=12"
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
]

/*



/*
Milestone 2
stampiamo i post del nostro feed.
*/
posts.forEach(post => {
    const postMarkUp = `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.author.name}</div>
                <div class="post-meta__time">${itFormatDate(post.created)}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${post.content}</div>
    <div class="post__image">
        <img src="${post.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <button id="btn-${post.id}" class="like-button  js-like-button" href="javascript:;" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </button>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
            </div>
        </div> 
    </div>            
    </div>`
    //console.log(postMarkUp);

    const postContainerDOM = document.querySelector(".posts-list");

    postContainerDOM.insertAdjacentHTML("beforeend", postMarkUp);

});








/*
    Milestone 3
    Se clicchiamo sul tasto "Mi Piace":
    - cambiamo il colore al testo del bottone 
    - incrementiamo il counter dei likes relativo. 
   
*/

//creo un nuovo array con id e like
const likeParam = posts.map(post => {
    return { id: post.id, likes: post.likes };
});

//mi creo una lista dei btn
const likesBtn = document.querySelectorAll(".like-button");

//quindi entro nella lista e affibbio una fnz ad ogni like
for (let i = 0; i < likeParam.length; i++) {
    likeParam[i].btn = likesBtn[i];

}

const newArrLiked = []//creo il nuovo array dei post likeati

likeParam.forEach(param => {
    const btn = param.btn; //prendiamo i btn
    const id = param.id; //prendiamo l'id
    btn.addEventListener("click", function (e) { //cicliamo il listener su tutti i btn
        btn.classList.add("like-button--liked"); //diamo il colore al like tramite la classe css
    
        const likeCounter = document.getElementById("like-counter-" + id); //prendiamo il counter di ogni post
        posts[id]["likes"] = posts[id]["likes"] + 1;//aggiungiamo il like ai like di partenza
        console.log(posts[id]["likes"]);
        likeCounter.innerHTML = (posts[id]["likes"]); //mettiamo in pgn
            
        // Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
        /*
        Se il nuovo array ha già dentro l'id non inserirlo, 
        altrimenti inseriscilo nell'array
        */
        if (!newArrLiked.includes(id)) {
            newArrLiked.push(id)
        } 
        console.log(newArrLiked);
        btn.setAttribute("disabled", "");//ho cambiato il markup da a a btn per disabilitare il click


        



        e.preventDefault(); //evitiamo l'autoaggiornamento della pgn
    })

})

const likedPosts = [];

// //associo a btn1 l'aumento di 1like
// btn.addEventListener("click", function (ev){
//     btn

// })


const btn1 = document.getElementById("btn-1");

// btn1.addEventListener("click", function (e){
//     //let x = posts[0]["likes"]; //= posts.index.likes
   
// })



/*newArrLiked.push(id)
BONUS
    
    Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
    Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
    Consigli del giorno:
    Ragioniamo come sempre a step. Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. 
    Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.
    Nota (bonus extra) - super opzionale:
    Poiché é la parte logica ad interessarci in questa fase del corso, nello starter kit c'é il marup che potete usare per volgere l'esercizio.
    Se finite la parte logica ed i vari bonus e vi avanza tempo per giocare un pó, pensate pure ad un layout differente e lavorateci su come bonus extra.
*/