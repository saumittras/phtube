console.log("connected script video");

// 1. Fetch, Load and Show Categories on html
const loadCategories = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// 2. fetch , and load video data from api
const loadVideos = () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/videos";
  fetch(url)
    .then((response) => response.json())
    .then((videoData) => displayVideos(videoData.videos))
    .catch((videoError) => console.log(videoError));
};

//3. load category videos
const loadCategoriesVideo = (id) => {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(url)
    .then((response) => response.json())
    .then((videoData) => displayVideos(videoData.category))
    .catch((videoError) => console.log(videoError));
};

// Create DisplayCategories
const displayCategories = (categories) => {
  const categoryContinor = document.getElementById("category");
  categories.forEach((item) => {
    console.log(item);

    // create a button
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button onclick="loadCategoriesVideo(${item.category_id})" class="btn">
      ${item.category}
      </button>
    `;
    // add button to category section
    categoryContinor.append(buttonContainer);
  });
};

function getTimeString(time) {
  const hours = parseInt(time / 3600);
  let remainingSec = time % 3600;
  const min = parseInt(remainingSec / 60);
  remainingSec = remainingSec % 60;

  return `${hours} hours ${min} minute ${remainingSec} second ago`;
}
// 2. display video on the websites

const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");

  if (videos.length == 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `
    <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
    <img src="images/Icon.png" />
    <h2 class="text-center text-xl font-bold">
    No Conten Here in this Category
    </h2>
    </div>`;
    return;
  } else {
    videoContainer.classList.add("grid");
    videoContainer.innerHTML = "";
  }

  videos.forEach((video) => {
    const videoCardDiv = document.createElement("div");
    videoCardDiv.classList = "card card-compact";
    videoCardDiv.innerHTML = `
    <figure class="h-[200px] relative">
    <img class ="w-full h-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
    ${
      video.others.posted_date?.length == 0
        ? ""
        : `<span class="absolute right-2 bottom-2 text-xs bg-black rounded p-1 text-white">${getTimeString(
            video.others.posted_date
          )}
      </span>`
    }
        
  </figure>
  <div class="px-0 py-2 flex gap-2">
    <div>
      <img class="w-10 h-10 rounded-full object-cover" src=${
        video.authors[0].profile_picture
      }/>
    </div>
    <div>
      <h2 class="font-bold">${video.title}</h2>
      <div class="flex">
      <p class="text-gray-300">${video.authors[0].profile_name}</p>
      ${
        video.authors[0].verified == true
          ? '<img class="w-5 " src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" />'
          : ""
      }
      </div>
      <p></p>
    </div>
    
  </div>
    `;
    videoContainer.append(videoCardDiv);
    console.log(video);
  });
};
loadCategories();
loadVideos();
