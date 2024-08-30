const GithubIcon = () => (
  <svg
    className=" h-10 w-10 text-[#adb7be]  cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const EyeIcon = () => (
  <svg
    className=" h-10 w-10 text-[#adb7be]  cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-width="2"
      d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
    />
    <path
      stroke="currentColor"
      stroke-width="2"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

function ProjectCard({ imgUrl, title, description, gitURL, previewUrl }) {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay  items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={gitURL}
            className=" h-14 w-14 border-2 mr-4 relative rounded-full border-[#ADB7BE] hover:border-white group/link "
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={previewUrl}
            className=" h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link "
          >
            <EyeIcon />
          </a>
        </div>
      </div>
      <div className="text-white  rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className=" text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]"> {description} </p>
      </div>
    </div>
  );
}

export default ProjectCard;
