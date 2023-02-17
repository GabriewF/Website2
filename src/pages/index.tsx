import type { Component } from "solid-js";

const Page: Component = () => {
  return (
    <div class="w-[65vh] h-[65vh] relative text-center">
      <img
        class="w-100% h-100% opacity-20"
        width="512px"
        height="512px"
        src="profile-512.webp"
        alt="MacOS Mouse"
        draggable={false}
      />

      <h1 class="absolute font-medium font-serif text-[7vh] center">
        GabriewF
      </h1>
    </div>
  );
};

export default Page;
