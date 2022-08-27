const home = document.getElementById("navhome");
const about = document.getElementById("navabout");
const books = document.getElementById("navbooks");
const facts = document.getElementById("navfacts");


const hme = document.getElementById("home");
const abt = document.getElementById("about");
const bks = document.getElementById("books");
const fct = document.getElementById("facts");

function scrollChecker() {
    if (scrollY < hme.scrollHeight){
        home.classList.add("active");
        about.classList.remove("active");
        books.classList.remove("active");
        facts.classList.remove("active");
    }else if(scrollY < hme.scrollHeight + abt.scrollHeight){
        home.classList.remove("active");
        about.classList.add("active");
        books.classList.remove("active");
        facts.classList.remove("active");
    }else if(scrollY < hme.scrollHeight + abt.scrollHeight + bks.scrollHeight){
        home.classList.remove("active");
        about.classList.remove("active");
        books.classList.add("active");
        facts.classList.remove("active");
    }
    else if(scrollY < hme.scrollHeight + abt.scrollHeight + bks.scrollHeight + fct.scrollHeight){
        home.classList.remove("active");
        about.classList.remove("active");
        books.classList.remove("active");
        facts.classList.add("active");
    }
}