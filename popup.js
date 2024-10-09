document.getElementById("postButton").addEventListener("click", async function() {
    const postContent = document.getElementById("postContent").value;
    const imageFile = document.getElementById("imageUpload").files[0];

    // Pavyzdinė logika, kaip paskelbti įrašą
    console.log("Posting to Facebook:", postContent);
    if (imageFile) {
        console.log("Image selected:", imageFile.name);
        // Čia galite įkelti nuotrauką ir paskelbti įrašą
    }
});
