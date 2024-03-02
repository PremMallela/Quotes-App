
const apiURL = "https://api.quotable.io/random";
const Quote = document.querySelector("#quote")
const getQuoteBtn=document.querySelector("#quoteBtn")
const author = document.querySelector("#author")

async function getQuote(URL){
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json()
    console.log(data)
    Quote.innerHTML = data.content
    author.textContent = data.author
}
getQuoteBtn.addEventListener("click",()=>{
    getQuote(apiURL)
})