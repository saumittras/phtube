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

// Create DisplayCategories
const displayCategories = (categories) => {
  const categoryContinor = document.getElementById("category");
  categories.forEach((item) => {
    console.log(item);

    // create a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    // add button to category section
    categoryContinor.append(button);
  });
};

// 2. display video on the websites
const demoObject = {
  category_id: "1001",
  video_id: "aaaa",
  thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
  title: "Shape of You",
  authors: [
    {
      profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
      profile_name: "Olivia Mitchell",
      verified: "",
    },
  ],
  others: {
    views: "100K",
    posted_date: "16278",
  },
  description:
    "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
};
const displayVideos = (videos) => {
  const videosSection = document.getElementById("videos");
  videos.forEach((video) => {
    const videoCardDiv = document.createElement("div");
    videoCardDiv.classList = "card card-compact";
    videoCardDiv.innerHTML = `
    <figure>
    <img class =""w-full h-full cover"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    `;
    videosSection.append(videoCardDiv);
    console.log(video);
  });
};
loadCategories();
loadVideos();
