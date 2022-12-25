document.getElementById('name-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name-input').value;
    const cardData = getCard(name);
    document.body.innerHTML = genCard(cardData);

});

function getCard(name) {
    switch(name.toLowerCase()) {
        case 'tajah': return tajahCard;
        case 'mom': return momCard;
        case 'dad': return dadCard;
        case 'kyle': return kyleCard;
        case 'ahlyus': return lyCard;
        default: return randomCard;
    }
}

function genCard(cardData, name) {
    return `
    <div style="display: flex;">
        <div class="card">
            <h1>${cardData.message}</h1>
            <img src="${cardData.imgSrc}" alt="${name}'s meme" height="600px" width="600px"/>
        </div>
    </div>
`
}

const tajahCard = {
    message: 'Merry Christmas hermana. Continue ringing the Literacy Bell!',
    imgSrc: 'https://i.pinimg.com/originals/77/dd/7f/77dd7f5ed9377ba2b3412a0377297f5d.jpg'
};

const momCard = {
    message: 'Merry Christmas Mom. Congrats on becoming an RN.',
    imgSrc:'https://winkgo.com/wp-content/uploads/2019/02/101-funny-nursing-memes-10.jpg'
};

const dadCard = {
    message: 'Merry Christmas old man.',
    imgSrc: 'https://i.pinimg.com/originals/e8/b0/3b/e8b03b2ffc555124bdcd6336129bd995.jpg'
};

const kyleCard = {
    message: 'Secret Santa unlocked merry christmas',
    imgSrc: 'https://sayingimages.com/wp-content/uploads/when-you-have-to-move-moving-meme.jpg'
};

const lyCard = {
    message: 'Are ya winning Christmas son?',
    imgSrc: 'https://i.redd.it/h3nybzd22n441.png'
}

const randomCard = {
    message: 'Who are you?!',
    imgSrc: 'https://www.pewpewtactical.com/wp-content/uploads/2016/10/Everyone-Looking-At-You.jpg'
};