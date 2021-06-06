async function getAPI(){

        try {
            for(i=1;i<480;i++){
                let resp = await fetch(`https://api.jikan.moe/v3/anime/${i}`)
                let data = await resp.json()
                if(data.title){
                    displayData(data)
                }
                
                //console.log(data)
            }
        //console.log(data)
        } catch (error) {
            console.log(error)
        }
}
let container = createElement('div','container')
    let row = createElement('div','row')
getAPI()

function displayData(data){
    
    let column = createElement('div','col-sm-12 col-md-6 col-lg-4 col-xl-3')
    let card = createElement('div','card')
    //card-img
    let image = createElement('img','img-card-top')
    image.src = data.image_url
    //card-title
    let title = createElement('h5','card-title')
    title.style.textAlign = 'center'
    title.innerHTML = data.title
    //card-body
    let cardBody = createElement('div','card-body')
    let rank = createElement('h6','card-text')
    rank.innerHTML = `Rank : ${data.rank}`
    let website = createElement('a','card-text')
    website.href = data.url
    website.innerHTML = 'Website Link'
    let trailer = createElement('a','card-text')
    trailer.href = data.trailer_url
    trailer.innerHTML = `<br/> Trailer Link`
    //append
    cardBody.append(rank, website, trailer)
    card.append(image, title, cardBody)
    column.append(card)
    row.append(column)
    container.append(row)
    document.body.append(container)
}

function createElement(ele, eleClass=''){
    let element = document.createElement(ele)
    element.setAttribute('class',eleClass)
    return element
}