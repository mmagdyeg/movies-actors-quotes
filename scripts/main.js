var quotes = [];
// Get a reference to the container element
const container = document.getElementById('quotes-container');

// Loop through the array and generate HTML for each element
let html = '';


  var actors = [
        {name:'Al-Pacino',image:'https://image.tmdb.org/t/p/w500/fMDFeVf0pjopTJbyRSLFwNDm8Wr.jpg'},
        {name:'Anthony-Hopkins',image:'https://prod-images.tcm.com/Master-Profile-Images/AnthonyHopkins.jpg'},
        {name:'Denzel-Washington',image:'https://variety.com/wp-content/uploads/2022/01/Denzel-4-16x9-1.jpg'},
        {name:'Jack-Nicholson',image:'https://www.californiamuseum.org/sites/main/files/imagecache/square/main-images/jack-nicholson.jpg?1632975955'},
        {name:'Marlon-Brando',image:'https://hips.hearstapps.com/hmg-prod/images/gettyimages-527187002-square.jpg'},
        {name:'Robert-De-Niro',image:'https://image.tmdb.org/t/p/w500/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg'},
        {name:'Tom-Hanks',image:'https://cdn2.kennedy-center.org/images/slideshow/TomHanks2014_slideshow.jpg'},
        {name:'Heath-Ledger',image:'https://i.ytimg.com/vi/L3oOldViIgY/mqdefault.jpg'},
        {name:'Hugo-Weaving',image:'https://img.europapress.es/fotoweb/fotonoticia_20211229155411_420.jpg'},
        {name:'Keanu-Reeves',image:'https://nationaltoday.com/wp-content/uploads/2022/10/44-Keanu-Reeves-640x514.jpg'},
        {name:'Laurence-Fishburne',image:'https://www.looper.com/img/gallery/the-real-reason-laurence-fishburne-may-not-return-as-morpheus-in-the-matrix-4/intro-1566393439.jpg'}
    ];
    var movies = [
        {name:'Star-Wars'},        
    ];  
  var index = 0;
  actors.forEach(actor => {
    fetch(`actors/${actor.name}.json`)
      .then(response => response.json())
        .then(data =>{   
            data.forEach((d, i) => {
                d['actor'] = actor.name.replace(/-/gi, ' ');;
                d['actorImage']= actor.image;
                //console.log(d)
              });
              quotes.push(data);  

              index++;
              if(index==actors.length){
                showActorTemplate(quotes.flat())
              }   

        }).catch(error => console.error(error));          
  });
  
  
  function showActorTemplate(list){
    const i = Math.floor(Math.random() * list.length);

    //for (var i = 0;i<actors.length;i++) {
        html += `
          <div class="col-md-8 mx-auto">
              <blockquote class="blockquote">
                  <p class="mb-0">"${list[i].quote}"</p>
                  <footer class="blockquote-footer">${list[i].actor} - ${list[i].movie} (${list[i].year})</footer>
              </blockquote>
              <img src="${list[i].actorImage}" class="rounded-circle" width="100" height="100" alt="Photo of person who said the quote">
          </div>
        `;
        // Append the generated HTML to the container element
        container.innerHTML = html;                
    //  }
  }
  