let posts = [{
    'userProfilePicture': 'img/posts/Travelparadise-profile-pic.jpg',
    'user': 'Travelparadise',
    'post': 'img/posts/Travelparadise-post.jpg',
    'description': 'Its like heaven',
    'postSmiley' : 'img/icons/palm.png',
    'iconSmiley': 'img/icons/smiley-black.png',
    'likes' : 'Gefällt 15.848 Mal',
    'timeline' : 'VOR 3 STUNDEN',
    'postComments' : [],
    'itsFollower' : 'foodlover ist follower',
    'follow' : 'Folgen'
},
{
    'userProfilePicture': 'img/posts/cars-profile-pic.jpg',
    'user': 'Cars',
    'post': 'img/posts/cars-post.jpg',
    'description': 'the luxury of this car',
    'postSmiley' : 'img/icons/in-love.png',
    'iconSmiley': 'img/icons/smiley-black.png',
    'likes' : 'Gefällt 6.897 Mal',
    'timeline' : 'VOR 6 STUNDEN',
    'postComments' : [],
    'itsFollower' : 'travelparadise ist follower',
    'follow' : 'Folgen'
},
{
    'userProfilePicture': 'img/posts/foodlover-profile-pic.jpg',
    'user': 'foodLover',
    'post': 'img/posts/Foodlover-post.jpg',
    'description': 'mmh yummy',
    'postSmiley' : 'img/icons/healthy-food.png',
    'iconSmiley': 'img/icons/smiley-black.png',
    'likes' : 'Gefällt 3.654 Mal',
    'timeline' : 'VOR 23 STUNDEN',
    'postComments' : [],
    'itsFollower' : 'cars ist follower',
    'follow' : 'Folgen'
}]

let mainUser = [{
        'mainUserProfilePicture': 'img/main-profile-pic-body.jpg',
        'mainUserId' : 'y.filiz95',
        'mainUserRealName' : 'Yusuf Filiz'
}]

function showPost(){
    document.getElementById('posts').innerHTML += '';
    for(let i = 0; i < posts.length; i++){
        const post = posts[i];
        document.getElementById('posts').innerHTML += /*html*/`
        <div class="user-post">
            <div>
                <div class="user-info">
                    <div class="user-profile-pic-name">
                        <img class="user-profile-pic active-story" src="${post['userProfilePicture']}">
                        <span class="user-profile-name">${post['user']}</span>
                    </div>
                    <div class="options icon-3-dots"></div>
                </div>
                <div class="post-image">
                    <img src="${post['post']}">
                </div>
                <div class="post-icons-save">
                    <div class="post-action-icons">
                        <div class="icon-heart" id="fullHeart(${i})" onclick="like(${i})"></div>
                        <div class="icon-comment" onclick="clickToWriteAComment(${i})" id="iconComment(${i})"></div>
                        <div class="icon-paper-plane"></div>
                    </div>
                    <div class="post-icon-save">
                        <div class="icon-save" id="fullSave(${i})" onclick="save(${i})"></div>
                    </div>
                </div>
                <div class="post-info">
                    <span class="weight-600">${post['likes']}</span>
                    <div class="user-post-description">
                        <span class="user weight-600">${post['user']}</span>
                        <div class="description-smiley">
                            <span>${post['description']}</span>
                            <img src="${post['postSmiley']}">
                        </div>
                    </div>
                </div>
            <div class="comment-count-to-3" id="commentCountTo3(${i})">
                <span class="see-all-comments-button">Kommentare:</span>
                <span class="see-all-comments-button" id="commentAmount(${i})">0</span>
            </div>
            <div class="comment-count-whole d-none" id="commentCountWhole(${i})">
            <span class="see-all-comments-button">Alle</span>
                <span class="see-all-comments-button" id="commentAmountWhole(${i})">0</span>
                <span class="see-all-comments-button">Kommentare</span>
            </div>
            <div class="comments" id="myComments(${i})"></div>
            </div>
            <div>
                <div class="see-all-comments">
                    <span class="timeline">${post['timeline']}</span>
                </div>
                <div class="comment-action">
                    <div class="smiley-input">
                        <img src="${post['iconSmiley']}">
                        <input type="text" placeholder="Kommentieren ..." required maxlength="30" id="writeComment(${i})">
                    </div>
                    <div class="post">
                        <span onclick="postComment(${i})">Posten</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
}

function renderUser(){
    document.getElementById('userHeader').innerHTML += '';
    for(i = 0; i < posts.length; i++){
        const post = posts[i];
        document.getElementById('userHeader').innerHTML +=/*html*/ `
        <div class="user-profile-pic-name-header">
            <img class="user-profile-pic-header active-story" src="${post['userProfilePicture']}">
            <span class="user-profile-name-header">${post['user']}</span>
        </div>
        `;
    }
}

function renderUsers(){
    document.getElementById('profileInfo').innerHTML = '';
    for(i = 0; i < mainUser.length; i++){
            const user = mainUser[i];
            document.getElementById('profileInfo').innerHTML += /*html*/`
            <div class="pos-fixed font-fam">
                <div class="main-pic-and-name">
                    <div class="main-profile-info">
                        <div>
                            <img class="main-pic active-story" src="${user['mainUserProfilePicture']}">
                        </div>
                        <div class="main-names">
                            <span class="weight-600">${user['mainUserId']}</span>
                            <span>${user['mainUserRealName']}</span>
                        </div>
                    </div>
                <div class="change-user">Wechseln</div>
            </div>
            <div class="suggestions-section">
                <span class="weight-600 color-grey">Vorschläge für dich</span>
                <span>Alle ansehen</span>
            </div>
            <div id="otherUser"></div>
            <div class="impressum">
                <span>Info</span> - 
                <span>Hilfe</span> - 
                <span>Presse</span> - 
                <span>API</span> - 
                <span>Jobs</span> - 
                <span>Datenrichtlinien</span> - 
                <span>Impressum</span> - 
                <span>Nutzungsbedingungen</span> - 
                <span>NetzDG</span> - 
                <span>UrhDaG</span> - 
                <span>Standorte</span> - 
                <span>Top-Konten</span> - 
                <span>Hastags</span> - 
                <span>Sprache</span>
            </div>    
            `;
        }
    document.getElementById('otherUser').innerHTML = '';
    for(j = 0; j < posts.length; j++){
        const otherUser = posts[j];
        document.getElementById('otherUser').innerHTML += /*html*/`
        <div class="other-user-section">
            <div>
                <div class="other-user">
                    <img class="active-story" src="${otherUser['userProfilePicture']}">
                    <div class="other-user-id">
                        <span class="weight-600">${otherUser['user']}</span>
                        <span class="user-follower-info">${otherUser['itsFollower']}</span>
                    </div>
                </div>
            </div>
            <div class="user-follow-button" id="followButton(${j})" onclick="followBtn(${j})">Folgen</div>
            <div class="user-followed-button d-none" id="followedButton(${j})" onclick="unfollowBtn(${j})">Gefolgt</div>
        </div>
        `;
    }    
}

function followBtn(i){
    document.getElementById(`followButton(${i})`).classList.add('d-none');
    document.getElementById(`followedButton(${i})`).classList.remove('d-none');
}

function unfollowBtn(i){
    document.getElementById(`followedButton(${i})`).classList.add('d-none');
    document.getElementById(`followButton(${i})`).classList.remove('d-none');
}

function like(i){
    let heart =  document.getElementById(`fullHeart(${i})`);
    heart.classList.toggle("icon-heart-full");
}

function save(i){
    let save = document.getElementById(`fullSave(${i})`);
    save.classList.toggle("icon-save-full");
}

function postComment(i){
    let comment = document.getElementById(`writeComment(${i})`).value;
    if(comment.length == 0){
        alert('Kein Kommentar?')
    }else {    
        posts[i].postComments.push(comment);
        commentsRender(i);
        document.getElementById(`writeComment(${i})`).value = '';
        document.getElementById(`iconComment(${i})`).classList.remove('icon-comment-full');
    }

    updateComments(i);
    updateCommentsWhole(i);
}

function commentsRender(i) {
    let myComments = document.getElementById(`myComments(${i})`);
    myComments.innerHTML = '';
    for (let x = 0; x < posts[i].postComments.length; x++) {
        const post = posts[i];
        myComments.innerHTML += /*html*/ `
        <div class="all-comments">
            <span class="comment-user-name">y.filiz95</span>
            <span>${post['postComments'][x]}</span>
        </div>
        `;
    }
}

function commentAmount(i){
    let amounts = posts[i].postComments.length;
    return amounts;
}

function updateComments(i){
    document.getElementById(`commentAmount(${i})`).innerHTML = commentAmount(i);
}

function commentAmountWhole(i){
    let amounts = posts[i].postComments.length;
        return amounts;
}

function updateCommentsWhole(i){
    document.getElementById(`commentAmountWhole(${i})`).innerHTML = commentAmountWhole(i);
}

function clickToWriteAComment(i){
    document.getElementById(`writeComment(${i})`).focus();
}



