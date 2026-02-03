document.addEventListener("DOMContentLoaded", function(){

    //We save the main image (the one that changes)
    let mainImage = document.getElementById("mainImage");   

    //Objects array (each object is a thumbnail)
    const seasons = [
        {id: "winter", src: "winter.jpg"},
        {id: "spring", src: "spring.jpg"},
        {id: "summer", src: "summer.jpg"},
        {id: "autumn", src: "autumn.jpg"}
    ];

    for (let i=0; i<seasons.length; i++){
        let season = seasons[i];                                    //We save the object where we are to use it
        let thumbnail = document.getElementById(season.id);         //We look for the season in the HTML that matches with the id of the season of the loop
        thumbnail.style.cursor= "pointer"
        //The event runs when the user clicks in the image of the thumbnail
        thumbnail.addEventListener("click", function(){
            mainImage.setAttribute("src", season.src);              //The src of the main image changes to the src of the image that the user selected
        });
    };
});