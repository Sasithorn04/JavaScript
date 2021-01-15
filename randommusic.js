let music = [
    '<iframe width="250" height="140" src="https://www.youtube.com/embed/tyrVtwE8Gv0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="250" height="140" src="https://www.youtube.com/embed/G-8eoy61jSU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="250" height="140" src="https://www.youtube.com/embed/CmOARvQO_us" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe  width="250" height="140" src="https://www.youtube.com/embed/0QU3TXS8FjA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="250" height="140" src="https://www.youtube.com/embed/CKDwsFbq1_c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="250" height="140" src="https://www.youtube.com/embed/ahkGRFhyxx4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="250" height="140" src="https://www.youtube.com/embed/AbEjhYLarSc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="250" height="140" src="https://www.youtube.com/embed/Cgt74TruI2c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="250" height="140" src="https://www.youtube.com/embed/GgVjHOx9kho" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe width="250" height="140" src="https://www.youtube.com/embed/hdqlevtXF8M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
];
let randomButton = document.getElementById('button');
let output = document.getElementById('yt');
randomButton.addEventListener('click', () =>{
    let n = music.length;
    let index = Math.floor(Math.random() * n);
    let musicyt = music[index];
    yt.innerHTML = musicyt;
});
