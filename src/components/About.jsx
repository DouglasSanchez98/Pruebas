import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white mt-0">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore nam aliquam architecto temporibus quos atque ea nemo natus adipisci eius ullam quibusdam ipsam, nesciunt recusandae error. Quaerat aspernatur perferendis reprehenderit assumenda nostrum, ducimus corporis inventore. Sunt omnis dolore distinctio nostrum assumenda, voluptate incidunt accusantium voluptatem, iusto dolor voluptates eaque!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.  </p>
      </div>

    </div>
  )
}

export default About
