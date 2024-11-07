function editAlbum() {
    document.getElementById('editForm').style.display = 'block';
}


function saveChanges() {
    const newTitle = document.getElementById('newTitle').value;
    const newArtist = document.getElementById('newArtist').value;


    if (newTitle) {
        document.getElementById('albumTitle').innerText = newTitle;
    }
    
    if (newArtist) {
        document.getElementById('albumArtist').innerText = `Artista: ${newArtist}`;
    }
    
    document.getElementById('editForm').style.display = 'none';
}
