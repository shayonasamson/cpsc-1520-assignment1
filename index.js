const albumTitle = document.getElementById("album-title");
const albumDescription = document.getElementById("album-description");
const albumArt = document.getElementById("albume-art");

document.getElementById("album-form").addEventListener("submit", onSubmit);
albumTitle.addEventListener("input", albumTitleErrorCheck);
albumDescription.addEventListener("input", albumDescriptionErrorCheck);

function albumTitleErrorCheck() {
  if (!albumTitle.value || albumTitle.value.length > 15) {
    albumTitle.classList.add("is-invalid");
    return;
  }
  albumTitle.classList.remove("is-invalid");
}

function albumDescriptionErrorCheck() {
  if (!albumDescription.value || albumDescription.value.length > 30) {
    albumDescription.classList.add("is-invalid");
    return;
  }
  albumDescription.classList.remove("is-invalid");
}

function albumArtErrorCheck() {
  if (albumArt.value) {
    albumArt.classList.remove("is-invalid");
  } else {
    albumArt.classList.add("is-invalid");
  }
}

function onSubmit(event) {
  event.preventDefault();

  albumTitleErrorCheck();
  albumDescriptionErrorCheck();
  albumArtErrorCheck();

  if (!albumArt.value || !albumTitle.value || !albumDescription.value) {
    return;
  }

  const albumList = document.getElementById("all-albums-list");
  const newAlbum = document.createElement("div");
  newAlbum.classList.add("col");
  newAlbum.innerHTML = `
      <div class="card shadow-sm">
          <img class="bd-placeholder-img card-img-top" src="/img/${albumArt.value}" />
          <div class="card-body">
              <h5 class="card-title">${albumDescription.value}</h5>
              <p class="card-text">${albumTitle.value}</p>
          </div>
      </div>
  `;
  albumList.appendChild(newAlbum);

  albumTitle.value = "";
  albumDescription.value = "";
  albumArt.selectedIndex = 0;
}
