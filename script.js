var online = localStorage.getItem('bool');
if(online==='true'){
    var login = document.querySelector('.loginElement');
    var register = document.querySelector('.registerElement');
    var pfp = document.querySelector('.profilePic');
    var user = localStorage.getItem('username');
    var usermenu = document.querySelector('.dropdownContainer')

    pfp.style.display = 'block';
    register.style.display = 'none';
    login.style.display = 'none';
    usermenu.style.display = 'block';
    document.querySelector('.user').innerHTML = "Hello, " + user + "!";
}



    //Pop up video

        document.querySelectorAll('.VidContainer').forEach(Container => {
            Container.onclick = async () => {
                const vid = Container.querySelector('video');
                const source = vid.getAttribute('src');

                document.querySelector('.VidOverlay').style.display = 'block';
                document.querySelector('.CommentSection').style.display = 'block';
                document.querySelector('.VidOverlay video').src = source;
            };
        });
        console.log("Made by Max and sheji ur dads");

        document.querySelector('.VidOverlay div').onclick = () => {
            document.querySelector('.VidOverlay').style.display = 'none';
            document.querySelector('.CommentSection').style.display = 'none';
            document.querySelector('.VidOverlay video').pause();
        };

        //Upload

        document.querySelector('.dropdownEl1').onclick = () => {
            document.querySelector('.UploadContainer').style.display = 'block';
            document.querySelector('.uploadCard').style.display = 'block';
            
        }


        function closeUploadContainer(){
            document.querySelector('.UploadContainer').style.display = 'none';
            document.querySelector('.uploadCard').style.display = 'none';        
        }


        //Profile


        function logout(){
            localStorage.clear();
            location.reload();
        }





    // Define a variable for the video things
    function uploadNewVideo() {
        var fileInput = document.getElementById('Video');
        var title = document.getElementById('VideoTitle').value;
        const file = fileInput.files[0];
        const videoURL = URL.createObjectURL(file);
    
        // Get the reference to NewVideoContainer
        var NewVideoContainer = document.getElementById('newVideos');
    
        // Create a new div element with a video using template literals
        var dynamicContent = `
            <div class="VidContainer">
                <video src="${videoURL}"></video>
                <span>${title}</span>
            </div>
        `;
        
        // Append the HTML content to the end of NewVideoContainer
        NewVideoContainer.insertAdjacentHTML('beforeend', dynamicContent);
    
        // Add an event listener to the newly created video element
        var newVideoElement = NewVideoContainer.lastElementChild.querySelector('video');
        newVideoElement.addEventListener('click', function() {
            document.querySelectorAll('.VidContainer').forEach(Container => {
                Container.onclick = async () => {
                    const vid = Container.querySelector('video');
                    const source = vid.getAttribute('src');
    
                    document.querySelector('.VidOverlay').style.display = 'block';
                    document.querySelector('.CommentSection').style.display = 'block';
                    document.querySelector('.VidOverlay video').src = source;
                };
            });
        });
    
        document.querySelector('.UploadContainer').style.display = 'none';
        document.querySelector('.uploadCard').style.display = 'none';
        fileInput.value = '';
        title = '';
    }
    