// function ProfileCard() {
//     return (
//         <div id="profile-card">
//             <div className="profile-item" id="profile-info">
//                 <h1><b>Software Engineer</b></h1>
//                 <p className="profile-text">Hello, my name is Lee Jia Keat. An aspiring Software Engineer based in Singapore.</p>
//             </div>
//             <img className="profile-item" id="profile-img" src="/images/lee-jia-keat.png" alt="Lee Jia Keat"/>
//         </div>);
// }

// function Description(){
//     return(
//         <div>
//             <p>Welcome to my website. <br></br>
//             You can read more about me <a href="/about/">here</a> and view my past projects <a href="/projects/">here</a>.</p>
//         </div>);

// }

// function HomePage(){
//     return (
//         <div id="profile">
//             <ProfileCard />
//             <Description />
//         </div>);
// }

function openProjectLink(link) {
    window.open(link, target="_self");
}

// const home = document.getElementById('home');
// ReactDOM.render(<HomePage />, home);