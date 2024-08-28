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
            {/* <IoLogoGithub className=" h-10 w-10 text-[#adb7be]  cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" /> */}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={previewUrl}
            className=" h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link "
          >
            {/* <IoEye className=" h-10 w-10 text-[#adb7be]  cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" /> */}
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
