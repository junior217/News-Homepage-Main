const READ_MORE_BTN = document.querySelector('.readMore');
const ARTICLE_PARAGRPH = document.querySelector(".article-paragraph");
let article = "Web 3.0, also known as the \"Semantic Web,\" is the next stage in the evolution of the World Wide Web. Unlike its predecessors, Web 3.0 is designed to be more intelligent, personalized, and connected. It is a vision of a web that is more intuitive and able to understand natural language and contextual meaning. This means that users will be able to search for information more efficiently and accurately. Web 3.0 is also expected to enable more advanced technologies such as artificial intelligence and machine learning to be integrated seamlessly into web applications. Additionally, the Semantic Web is designed to be more decentralized and open, allowing for greater collaboration and innovation among developers and users. Overall, Web 3.0 promises to revolutionize the way we interact with the internet and transform it into a more intelligent and interconnected ecosystem."
let readLessArticle = "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"

const readMore = () => {
    ARTICLE_PARAGRPH.innerHTML = article;
    ARTICLE_PARAGRPH.style.fontSize = "11px";
    ARTICLE_PARAGRPH.style.fontWeight = "bold";
    READ_MORE_BTN.innerHTML = "Read Less";
    READ_MORE_BTN.style.backgroundColor = "hsl(240, 100%, 5%)";
    
    console.log(ARTICLE_PARAGRPH.innerHTML)
}



READ_MORE_BTN.addEventListener("click", readMore, readLess);
