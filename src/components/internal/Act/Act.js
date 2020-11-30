import React from "react";
import ImageWithInfo from "../ImageWithInfo";
import PhotosContainer from "../PhotosContainer";
import InfoWithCta from "../InfoWithCta";
import SignUpContainer from "../../Home/SignUpContainer";

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
    borderPosition: "right",
    image:
      "https://images.unsplash.com/photo-1483825366482-1265f6ea9bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
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
      <div className="sm:py-16 py-8 max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 bg-white">
        <h3 className="primary-extra-bold sm:text-5xl text-2xl mb-5 sm:mb-8">
          Are you an Lloyd’s Employee?
        </h3>
        <p className="sm:text-2xl primary-semi-bold text-base">
          Take this{" "}
          <a className="inline-block text-blue-900 underline">survey</a> to
          share your thoughts on Lloyd’s fossil fuel business. Your responses
          can be totally anonymous, or you can share your contact info for
          updates. As anemployee, you’re well-placed to help Lloyd’s tackle
          climate change, and we’d love to connect with you. You can also reach
          out to us confidentially via email: ADD
        </p>
      </div>
      <InfoWithCta {...signInContent} />
      <InfoWithCta {...tweetsContent} />
      <PhotosContainer />
      <div className="bg-gray-200">
        <div className="flex flex-col max-w-1440 3xl:mx-auto 2xl:mx-16 mx-12 items-center sm:py-12 py-8 text-gray-900">
          <h2 className="font-bold sm:text-6xl text-2xl mb-5 sm:mb-10 primary-extra-bold">
            Are you excited to do more? Join the movement
          </h2>
          <p className="sm:text-2xl text-base primary-semi-bold">
            Sign up hereand we will keep you updated on ways to take action to
            call on Lloyd’s to insure our future.
          </p>
          <button className="mt-12 max-w-xs w-full py-6 bg-blue-900 text-white sm:text-2xl text-xl primary-bold">
            Sign Up Here
          </button>
        </div>
      </div>
    </div>
  );
}

export default Act;
