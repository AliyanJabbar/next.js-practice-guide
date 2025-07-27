import Image from "next/image";
import profilePic from "../../images/profile pic.png";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-[35px]">Images in Next.JS</h1>
      <Image
      // in image we are using width and height attribute to control pexels. And in className we are controling width and height in real 
        src={profilePic}
        alt="Profile Pic in yellow" //alt also helps in SEO of website
        width={500}
        height={500}
        // attribute loading=lazy is js/ts attribute. It loads the image on background when website is loaded first time 
        loading="lazy"
        className="w-[300px] h-[300px] ml-10 rounded-full"
      />


      <Image
      // getting image by different method. This method is working but the preferred one is above one
        src={require('../../images/blue back prof pic.png')}
        alt="Profile Pic in blue"
        width={500}
        height={500}
        loading="lazy"
        className="w-[300px] h-[300px] ml-10 mt-5 rounded-full" //given properties are width height marginLeft marginTop roundedFull
      />
    </div>
  );
}
