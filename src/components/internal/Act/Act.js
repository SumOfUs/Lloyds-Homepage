import React from "react";
import SignUpContainer from "../SignUpContainer";
import ImageWithInfo from "../ImageWithInfo";
import PhotosContainer from "../PhotosContainer";
import InfoWithCta from "../InfoWithCta";

function Act() {
  const imageWithInfoContent = {
    heading: "Take Action",
    description: (
      <span className="text-3xl">
        Join us in calling on Lloyd’s of London to act to prevent the worst
        effects of the climate crisis, not act as the last refuge for climate
        wreckers to secure insurance!
      </span>
    ),
    imgBackground: "bg-blue-900",
    imgPosition: "right",
    image: "https://dummyimage.com/628x487/000/fff&text=Act",
  };

  const signInContent = {
    heading: "Sign Petition",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    buttonText: "Sign Petition",
  };

  const tweetsContent = {
    heading: "Tweet at LLoyds",
    description:
      "Tweet at Lloyd's insurers now, with your message calling on them to rule out insuring Adani and Trans Mountain and to put in place policies to exclude coal and new oil and gas projects. Include the hashtag #LloydsInsureOurFutureand tag @InsOurFuture. 3.Resources: Here you",
    buttonText: "#LloydsInsureOurFutureand",
    isDark: true,
  };

  return (
    <div className="w-full">
      <ImageWithInfo {...imageWithInfoContent} />
      <SignUpContainer />
      <div className="sm:px-20 sm:py-24 p-8 bg-white">
        <h3 className="primary-bold sm:text-5xl text-2xl mb-5 sm:mb-10">
          Are you an Lloyd’s Employee?
        </h3>
        <p className="sm:text-2xl text-base">
          Take this survey to share your thoughts on Lloyd’s fossil fuel
          business. Your responses can be totally anonymous, or you can share
          your contact info for updates. As anemployee, you’re well-placed to
          help Lloyd’s tackle climate change, and we’d love to connect with you.
          You can also reach out to us confidentially via email: ADD
        </p>
      </div>
      <InfoWithCta {...signInContent} />
      <InfoWithCta {...tweetsContent} />
      <PhotosContainer />
    </div>
  );
}

export default Act;
